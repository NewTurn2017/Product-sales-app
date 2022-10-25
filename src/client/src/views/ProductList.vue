<template>
  <main class="mt-3">
    <div class="container">
      <div class="row mb-2">
        <div class="col-12">
          <select class="form-select">
            <option selected></option>
            <option value="1">전자제품</option>
            <option value="2">가전</option>
            <option value="3">하드디스크</option>
            <option value="3">램</option>
          </select>
        </div>
      </div>
      <div class="row g-3">
        <div class="col-xl-3 col-lg-4 col-md-6" :key="i" v-for="(product, i) in productList">
          <div class="card" style="width: 18rem">
            <a href="product_detail.html"><img :src="product.path" class="card-img-top" alt="..." /></a>
            <div class="card-body">
              <h5 class="card-title">{{ product.product_name }}</h5>
              <p class="card-text">
                <span class="badge bg-dark text-white mr-1">{{ product.category1 }}</span>
                <span class="badge bg-dark text-white mr-1">{{ product.category2 }}</span>
                <span class="badge bg-dark text-white mr-1">{{ product.category3 }}</span>
              </p>

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" role="group">
                  <a href="#" class="btn btn-sm btn-outline-secondary">장바구니 담기</a>
                  <a href="#" class="btn btn-sm btn-outline-secondary">주문하기</a>
                </div>
                <small class="text-dark">{{ product.product_price }}</small>
              </div>
            </div>
          </div>
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
      productList: []
    }
  },
  setup() {},
  created() {
    this.getProductList()
  },
  mounted() {},
  unmounted() {},
  methods: {
    async getProductList() {
      this.productList = await this.$api('/api/productList', {})
    }
  }
}
</script>
