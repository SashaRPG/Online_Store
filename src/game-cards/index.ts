import IGameCard from './game-card.interface';

function gameCard({num, cover, name, publisher, count, year, platform, internet, genre, popular}: IGameCard) {
    const dataArr = [{
        class: 'count',
        title:'Copies',
        value: count,
    },
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
    }
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
        li.textContent = `${el.title}: ${el.value}`;
        return li;
    }));

    catalogue__data_cover.append(cover_img);
    catalogue__data.append(catalogue__data_cover, title, details);
    catalogue__item.append(catalogue__data);

    return catalogue__item;
}

export default gameCard;


/* <div class="catalogue__item">
<div class="catalogue__data">
<div class="catalogue__data-cover">
</div>
<h2 class="catalogue__data-title">Crysis</h2>
<ul class="catalogue__data-details">

</ul>
</div>
</div> *//* 
    [{
        class: 'count',
        title:'Copies',
        value: count,
        }] 
        ul.append(...li.map((el)=>{
const el = document.createElement('li');
li.className= 'catalogue__data-'+el.class;
li.textContent = ${el.title}: ${el.value};
return li;
}))
        */