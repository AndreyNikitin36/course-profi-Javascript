const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

Vue.component('goods-list', {
  props: ['goods'],
  template: `
  <main class="products_wraper">
    <goods-item v-for="good in goods" :good="good"></goods-item>
  </main>
  `
});

Vue.component('goods-item', {
  props: ['good'],
  template: `
  <div class="goods-item">
    <h3>{{ good.product_name }}</h3>
    <p>{{ good.price }}</p>
    <button class="item-button" type="button" 
    v-on:click="basketAdd(good.product_name)">Купить</button>
  </div>
  `
});

Vue.component('search-block', {
  props: ['searchLine'],
  template: `
  <div class="menu_item">
    <input v-model="searchLine" type="text" class="goods-search" />
    <button class="search-button" type="button" v-on:click="filterGoods">Искать</button>
  </div>
  `
});

Vue.component('basket-block', {
  template: `
  <div>
    <div v-if="isVisibleCart != 0" class="products_wraper">
        <div class="goods-item" v-for="cart in basket">
            <h3>{{cart.product_name}}</h3>
            <p>{{cart.price}} руб.</p>
            <p>Количество в корзине: {{cart.quantity}}</p>
            <p>Общая стоимость: руб.</p>
        </div>
        <hr class="navbar-divider">
        <a class="navbar-item" href="#">Итого к оплате руб.</a>
    </div>
    <div v-else class="products_wraper">
        <a class="navbar-item" href="#">
            Корзина пуста
        </a>
    </div>
  </div>
  `
});

const app = new Vue({
  el: '#app',
  data: {
    goods: [],
    filteredGoods: [],
    isVisibleCart: 0,
    basket: [],
    searchLine: ''
  },
  methods: {
    makeGETRequest(url, callback) {
      // const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
      var xhr;
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          callback(xhr.responseText);
        }
      }
      xhr.open('GET', url, true);
      xhr.send();
    },
    filterGoods() {
      const value = this.searchLine;
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
    },
    basketAdd(item) {
      this.basket.push({ cart: item, quantity: 1 });
      this.isVisibleCart = 1;
      console.log(this.basket);

    }
  },
  mounted() {
    this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
      this.goods = JSON.parse(goods);
      this.filteredGoods = JSON.parse(goods);
    });
  }
});
