function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        }

        else if (window.ActiveXObject) {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }

        xhr.open('GET', url, true);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                resolve(xhr.responseText);
            }
        }

        xhr.onerror = function () { // если error подаем данные в reject
            reject(new Error('network request failed'));
        }

        xhr.send();
    });
}

const url = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(product_name, price) {
        this.product_name = product_name;
        this.price = price;
    }

    render() {
        return `<div class="goods-item"><h3>${this.product_name}</h3><p>${this.price} руб.</p></div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
    }

    fetchGoods(cb) {
        makeGETRequest(`${url}/catalogData.json`, (goods) => {
            this.goods = JSON.parse(goods);
            cb();
            console.log(goods);
        })
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();

        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}

// класс для рендеринга самой страницы корзины
// class MainBasket {

//     render() {

//     }

// }

// класс для списка товаров в корзине
// class BasketList {

//     render() {

//     }


// }

// // класс для отдельного товара в корзине
// class BasketItem {

//     render() {

//     }


// }

const list = new GoodsList();
list.fetchGoods(() => {
    list.render();
});
