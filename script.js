const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

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

// function makeGETRequest(url) {
//   return new Promise((resolve) => {
//     var xhr;
//     if (window.XMLHttpRequest) {
//       xhr = new XMLHttpRequest();
//     } else if (window.ActiveXObject) {
//       xhr = new ActiveXObject("Microsoft.XMLHTTP");
//     }

//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === 4) {
//         resolve(JSON.parse(xhr.response));
//       }
//     }

//     xhr.open('GET', url, true);
//     xhr.send();
//   });
// }

// const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// class GoodsItem {
//   constructor({ product_name, price }) {
//     this.title = product_name;
//     this.price = price;
//   }

//   render() {
//     return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб.</p></div>`;
//   }
// }

// class GoodsList {
//   constructor() {
//     this.goods = [];
//     this.filteredGoods = [];
//   }

//   async fetchGoods(cb) {
//     return makeGETRequest(`${url}/catalogData.json`, (goods) => {
//       this.goods = JSON.parse(goods);
//       this.filteredGoods = JSON.parse(goods);
//       cb();
//     });
//   }

//   render(goods) {
//     let listHtml = document.querySelector('.goods-list');
//     goods.forEach(good => {
//       const goodItem = new GoodsItem(good);
//       listHtml.insertAdjacentHTML('afterEnd', goodItem.render());
//     });
//   }

//   filterGoods(value) {
//     const regexp = new RegExp(value, 'i');
//     this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
//     this.render();

//   }
// }

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', (e) => {
//   const value = searchInput.value;
//   list.filterGoods(value);
// });

// const goodsListInstance = new GoodsList();
// goodsListInstance.fetchGoods()
//   .then((data) => goodsListInstance.render(data));
