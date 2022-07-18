import IGameCard from './game-card.interface';
import { showCart, addToCart, checkCart } from '../utilites/cart';
function gameCard({num, cover, name, publisher, price, year, platform, internet, genre, popular}: IGameCard) {
    const dataArr = [
    {
        class: 'platform',
        title:'Platforms',
        value: platform,
    },
    {
        class: 'publisher',
        title:'Publisher',
        value: publisher,
    },
    {
        class: 'genre',
        title:'Genre',
        value: genre,
    },
    {
        class: 'intertnet',
        title:'Internet',
        value: internet,
    },
    {
        class: 'popular',
        title:'Popular Now',
        value: popular,
    },
    {
        class: 'year',
        title:'Year',
        value: year,
    },
    {
        class: 'price',
        title:'Price',
        value: price,
    },
];

    const catalogue__item = document.createElement('div');
    catalogue__item.className = 'catalogue__item';
    catalogue__item.setAttribute('data-id', String(num));
    const catalogue__data = document.createElement('div');
    catalogue__data.className = 'catalogue__data';
    
    const catalogue__data_cover = document.createElement('div');
    catalogue__data_cover.className = 'catalogue__data-cover';

    const cover_img = document.createElement('img');
    cover_img.src = cover;
    cover_img.alt = 'game cover';

    const title = document.createElement('h2');
    title.className = 'catalogue__data-title';
    title.textContent = name;

    const details = document.createElement('ul');
    details.className = 'catalogue__data-details';

    details.append(...dataArr.map((el)=>{
        const li = document.createElement('li');
        li.className= 'catalogue__data-'+el.class;
        if (li.className === 'catalogue__data-price'){
            li.textContent = `${el.title}: £${el.value}`
        }else {
            li.textContent = `${el.title}: ${el.value}`;
        }
        return li;
    }));

    const buyButton = document.createElement('button');
    buyButton.className = 'button buy';
    buyButton.addEventListener('click', () => {
        const cartLength = addToCart(num);
        console.log(cartLength);
        if (buyButton.classList.contains('active__buy')){
            buyButton.classList.remove('active__buy');
        } else {
            if (cartLength <= 20) {
                buyButton.classList.add('active__buy');
            }
        }
        showCart();
    });
    if (checkCart(num)) {
        buyButton.classList.add('active__buy');
    }

    catalogue__data_cover.append(cover_img);
    catalogue__data.append(catalogue__data_cover, title, details);
    catalogue__item.append(catalogue__data);
    catalogue__item.append(buyButton);

    return catalogue__item;
}

export default gameCard;
