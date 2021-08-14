function makeGETRequest(url) {
    return new Promise((resolve) => {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(JSON.parse(xhr.response));
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    });
}

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor({ product_name, price }) {
        this.title = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price} руб.</p></div>`;
    }
}

class GoodsList {
    constructor() { }

    async fetchGoods() {
        return await fetch(`${url}/catalogData.json`).then(resp => resp.json());
    }

    render(goods) {
        let listHtml = document.querySelector('.goods-list');
        goods.forEach(good => {
            const goodItem = new GoodsItem(good);
            listHtml.insertAdjacentHTML('afterEnd', goodItem.render());
        });
    }
}

const goodsListInstance = new GoodsList();
goodsListInstance.fetchGoods()
    .then((data) => goodsListInstance.render(data));

