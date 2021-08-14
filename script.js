// function makeGETRequest(url) {
//     return new Promise((resolve) => {
//         var xhr;
//         if (window.XMLHttpRequest) {
//             xhr = new XMLHttpRequest();
//         } else if (window.ActiveXObject) {
//             xhr = new ActiveXObject("Microsoft.XMLHTTP");
//         }

//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 resolve(JSON.parse(xhr.response));
//             }
//         }

//         xhr.open('GET', url, true);
//         xhr.send();
//     });
// }

// const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// class GoodsItem {
//     constructor({ product_name, price }) {
//         this.title = product_name;
//         this.price = price;
//     }

//     render() {
//         return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб.</p></div>`;
//     }
// }

// class GoodsList {
//     constructor() {
//         this.goods = [];
//         this.filteredGoods = [];
//     }

//     async fetchGoods(cb) {
//         return makeGETRequest(`${url}/catalogData.json`, (goods) => {
//             this.goods = JSON.parse(goods);
//             this.filteredGoods = JSON.parse(goods);
//             cb();
//         });
//     }

//     render(goods) {
//         let listHtml = document.querySelector('.goods-list');
//         goods.forEach(good => {
//             const goodItem = new GoodsItem(good);
//             listHtml.insertAdjacentHTML('afterEnd', goodItem.render());
//         });
//     }

//     filterGoods(value) {
//         const regexp = new RegExp(value, 'i');
//         this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
//         this.render();

//     }
// }

// const searchButton = document.querySelector('.search-button');
// searchButton.addEventListener('click', (e) => {
//     const value = searchInput.value;
//     list.filterGoods(value);
// });

// const goodsListInstance = new GoodsList();
// goodsListInstance.fetchGoods()
//     .then((data) => goodsListInstance.render(data));



const regExp1 = /'\s/gm;
const regExp2 = /\s'/gm;
const text = "Расска'з – 'это' небольшое по 'объему' литератур'ное произведение, ко'торое 'рассказывает' о некотором событии, 'произошедшем' с героем. Подавляющее большинство 'рассказов' написано в прозе, но 'бывают' рассказы и в стихах. Отличительным 'жанрообразующим' признаком рассказа 'является' то, что произведение такого рода сосредоточено, как правило, на одном герое, на одном событии, которое 'описывается' в деталях.";

console.log(text);
const newText = text.replace(regExp1, '\" ');
console.log(newText.replace(regExp2, '\ "'));