// const goods = [
//     { title: 'Shirt', price: 150 },
//     { title: 'Socks', price: 50 },
//     { title: 'Jacket', price: 350 },
//     { title: 'Shoes', price: 250 },
// ];

// const default_goods = [{ title: 'product', price: 0 }]

// const renderGoodsItem = ({ title, price }) => {
//     return `<div class="goods-item"><h3>${title}</h3><p>${price} руб.</p></div>`;
// };

// const renderGoodsList = (list = default_goods) => {
//     document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item)).join('');
// }

// renderGoodsList(goods);

class GoodsItem {
    constructor({ title, price, quantity }) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб.</p><p>В наличии: ${this.quantity} шт.</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods() {
        this.goods = [
            { title: 'Shirt', price: 150, quantity: 50 },
            { title: 'Socks', price: 50, quantity: 13 },
            { title: 'Jacket', price: 350, quantity: 34 },
            { title: 'Shoes', price: 250, quantity: 21 },
        ];
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    // Подсчет общей стоимости товаров. Вывод в консоль
    sumGoods() {
        let total = this.goods.reduce((sum, item) => sum + item.price * item.quantity, 0);

        console.log("Общая стоимость товаров на складе: " + total + " руб.");

    }
}

// класс для рендеринга самой страницы корзины
class MainBasket {

    render() {

    }

}

// класс для списка товаров в корзине
class BasketList {

    render() {

    }


}

// класс для отдельного товара в корзине
class BasketItem {

    render() {

    }


}

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();
