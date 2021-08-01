const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const defualt_goods = [{ title: 'product', price: 0 }]

const renderGoodsItem = (title = product, price = 0) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price} руб.</p></div>`;
};

const renderGoodsList = (list = defualt_goods) => {
    let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList;
}

renderGoodsList(goods);
