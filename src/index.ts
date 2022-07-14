// import createHeader from "./header";

import gameCard from './game-cards';
import IGameCard from './game-cards/game-card.interface';

import './style/index.css';




async function showGameData(){
    const gameData = await fetch('./assets/data.json').then((res) => res.json()); 
    console.log(gameData);
    const games = document.querySelector('.games');
    games?.append(...gameData.map((el: IGameCard) => gameCard(el)));
}

showGameData();




// gameCard({num: 0,
//     cover: "./assets/covers/burnout.jpeg",
//     name: "Burnout Paradise",
//     publisher: "EA",
//     count: 12,
//     year: 2012,
//     platform: "PS, XBox, PC",
//     internet: "Not required",
//     genre: "racing",
//     popular: true}));

// createHeader();