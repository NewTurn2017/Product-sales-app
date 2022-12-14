const express = require('express')
const app = express()
const session = require('express-session')
const fs = require('fs')

app.use(
  session({
    secret: 'secretcode',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 1000 * 60 * 60, //쿠키 유효시간 1시간
    },
  })
)

app.use(
  express.json({
    limit: '50mb',
  })
)

const server = app.listen(3000, () => {
  console.log('Server started, port 3000.')
})

fs.watchFile(__dirname + '/sql.js', (curr, prev) => {
  console.log('sql 변경시 재작 없이 반영되도럭 함.')
  delete require.cache[require.resolve('./sql.js')]
  sql = require('./sql.js')
})

const db = {
  database: 'dev',
  connectionLimit: 10,
  // host: '192.168.0.74', //회사(부산)
  host: '192.168.10.43', //회사(부산)
  // host: '192.168.0.18', //집
  user: 'root',
  password: 'mariadb',
}

const dbPool = require('mysql').createPool(db)

app.post('/api/login', async (req, res) => {
  try {
    await request.db('signUp', req.body.param)
    if (req.body.param.length > 0) {
      for (let key in req.body.body.param[0]) {
        req.session[key] = req.body.param[0][key]
      }
      res.send(req.body.param[0])
    } else {
      res.send({ error: 'Please try again or contanct system manager.' })
    }
  } catch (err) {
    res.send({
      error: 'DB access error!',
    })
  }
})

app.post('/api/logout', async (req, res) => {
  req.session.destroy()
  res.send('ok')
})

let sql = require('./sql.js')
app.post('/api/:alias', async (req, res) => {
  try {
    res.send(await request.db(req.params.alias, req.body.param))
  } catch (err) {
    res.status(500).send({
      error: err,
    })
  }
})

const request = {
  async db(alias, param = [], where = '') {
    return new Promise((resolve, reject) =>
      dbPool.query(sql[alias].query + where, param, (error, rows) => {
        if (error) {
          if (error.code != 'ER_DUP_ENTRY') console.log(error)
          resolve({
            error,
          })
        } else resolve(rows)
      })
    )
  },
}
