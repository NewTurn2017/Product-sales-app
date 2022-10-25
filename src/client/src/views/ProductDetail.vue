<template>
  <main class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div id="carouselExampleIndicators" class="carousel carousel-dark slide" data-bs-ride="true">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="http://image.auction.co.kr/itemimage/28/9a/31/289a31f586.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="http://image.auction.co.kr/itemimage/29/0a/57/290a5791d1.jpg" class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src="http://image.auction.co.kr/itemimage/29/0a/57/290a579241.jpg" class="d-block w-100" alt="..." />
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div class="col-md-7">
          <div class="card shadow-sm">
            <div class="card-body">
              <h5 class="card-title">삼성전자 비스포크 MS23T5018AW 전국배송/SY</h5>
              <h5 class="card-title pt-3 pb-3 border-top">219,000 원</h5>
              <p class="card-text pt-3 border-top">
                <span class="badge bg-dark">전자제품</span>
                <span class="badge bg-dark">가전</span>
              </p>

              <p class="card-text pb-3">배송비 2,500원 | 도서산관(제주도) 배송비 추가 5,000원 | 택배배송 | 5일 이내 출고 (주말, 공휴일 제외)</p>

              <div class="card-text pt-3 border-top pb-3">
                <div class="row">
                  <div class="col-auto">
                    <label class="col-form-label">구매수량</label>
                  </div>
                  <div class="col-auto">
                    <div class="input-group">
                      <span class="input-group-text">-</span>
                      <input type="text" class="form-control" style="width: 40px" value="1" />
                      <span class="input-group-text">+</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row pt-3 pb-3 border-top">
                <div class="col-6">
                  <h3>총 상품 금액</h3>
                </div>
                <div class="col-6" style="text-align: right">
                  <h3>219,000 원</h3>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-dark">장바구니 담기</button>
                </div>
                <div class="col-6 d-grid p-1">
                  <button type="button" class="btn btn-lg btn-danger">주문하기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <img src="https://ai.esmplus.com/zmshy1/COX/%EC%83%81%ED%92%88%20DB/CY104_DB.jpg" class="img-fluid" />
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      product_id: 0,
      productDetail: [],
      productImage: []
    }
  },
  setup() {},
  created() {
    this.product_id = this.$route.query.product_id
    this.getProductDetail()
    this.getProductImage()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getProductDetail() {
      this.productDetail = await this.$api('/api/productDetail', { param: [this.product_id] })
    },
    async getProductImage() {
      this.productImage = await this.$api('/api/productMainImages', { param: [this.product_id] })
    }
  }
}
</script>
