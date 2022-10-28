module.exports = {
  productList: {
    query: `
    select t1.*, t2.path, t3.category1, t3.category2, t3.category3 
    from t_product t1, t_image t2, t_category t3 
    where t1.id = t2.product_id and t2.type = 1 and t1.category_id = t3.id
    `,
  },
  productList2: {
    query: `select t3.*, t4.path from (select t1.*, t2.category1, t2.category2, t2.category3 
      from t_product t1, t_category t2
      where t1.category_id = t2.id) t3
      left join (select * from t_image where type=1) t4
      on t3.id = t4.product_id`,
  },
  productDetail: {
    query: `
    select t1.*, t2.path, t3.category1, t3.category2, t3.category3
    from t_product t1, t_image t2, t_category t3
    where t1.id = ? and t1.id = t2.product_id and t2.type = 3 and t1.category_id = t3.id
    `,
  },
  productMainImage: {
    query: `
    select * from t_image where product_id = ? and type = 2
    `,
  },
  productInsert: {
    //role 설정해야함. (로그인한 사용자만 가능하도록)
    // 오브젝트로 던지면 set ? 으로 가능
    query: `
  insert into t_product set ?
  `,
  },
  productDelete: {
    query: `
    delete from t_product where id=?
    `,
  },
  productImageInsert: {
    query: `
    insert into t_image (product_id, type, path)
    values (?,?,?)
    `,
  },
  sellerList: {
    query: `
    select * from t_seller
    `,
  },
  categoryList: {
    query: `
    select * from t_category
    `,
  },
  signUp: {
    query: `insert into t_user set ? on duplicate key update ?`,
  },
}
