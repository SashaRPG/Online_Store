//import gameCard from './game-cards';
//import IGameCard from './game-cards/game-card.interface';
import workWithStorage from './utilites';
import gameWithFilters from './utilites/games_with_filters';
import { IFilters } from './utilites';
import './style/index.css';

const gameCard = new gameWithFilters();
const filters = new workWithStorage();
const state = filters.get();
let cart = {};

gameCard.filters(state);

const searchField = document.querySelector('.filters__search') as HTMLInputElement;
searchField.value = state.search;
searchField.addEventListener('input', (e) => {
    filters.setSearch((e.target as HTMLInputElement).value);
    gameCard.filters(filters.get());
});

const selectSearch = document.querySelector('.filters__sort') as HTMLInputElement;
selectSearch.value = state.sortBy;
selectSearch.addEventListener('input', (e) => {
    filters.sortBy((e.target as HTMLInputElement).value);
    gameCard.filters(filters.get());
});

//adding visual distinction for active buttons

function activeClass(state: IFilters, btn: Element) {
    btn.classList.toggle('active');
}

//buttons for gaming platforms

const buttonPS = document.querySelector('.type-ps');
//activeClass(state);
buttonPS?.addEventListener('click', () => {
    filters.setArrayElements("platform", "PS");
    activeClass(filters.get(), buttonPS);
    gameCard.filters(filters.get());
});

const buttonPC = document.querySelector('.type-pc');
buttonPC?.addEventListener('click', () => {
    filters.setArrayElements("platform", "PC");
    activeClass(filters.get(), buttonPC);
    gameCard.filters(filters.get());
});

const buttonXbox = document.querySelector('.type-xbx');
buttonXbox?.addEventListener('click', () => {
    filters.setArrayElements("platform", "XBox");
    activeClass(filters.get(), buttonXbox);
    gameCard.filters(filters.get());
});

//buttons for publishers

const buttonEA = document.querySelector('.type-ea');
buttonEA?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "EA");
    activeClass(filters.get(), buttonEA);
    gameCard.filters(filters.get());
});

const buttonValve = document.querySelector('.type-valve');
buttonValve?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Valve");
    activeClass(filters.get(), buttonValve);
    gameCard.filters(filters.get());
});

const buttonMicrosoft = document.querySelector('.type-microsoft');
buttonMicrosoft?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Microsoft");
    activeClass(filters.get(), buttonMicrosoft);
    gameCard.filters(filters.get());
});

const buttonSCE = document.querySelector('.type-sce');
buttonSCE?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Sony CE");
    activeClass(filters.get(), buttonSCE);
    gameCard.filters(filters.get());
});

const buttonOthers = document.querySelector('.type-others');
buttonOthers?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Other");
    activeClass(filters.get(), buttonOthers);
    gameCard.filters(filters.get());
});

//buttons for genres

const buttonShooter = document.querySelector('.type-shooter');
buttonShooter?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Shooter");
    activeClass(filters.get(), buttonShooter);
    gameCard.filters(filters.get());
});

const buttonRacing = document.querySelector('.type-racing');
buttonRacing?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Racing");
    activeClass(filters.get(), buttonRacing);
    gameCard.filters(filters.get());
});

const buttonPlatformer = document.querySelector('.type-platformer');
buttonPlatformer?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Platformer");
    activeClass(filters.get(), buttonPlatformer);
    gameCard.filters(filters.get());
});

const buttonStrategy = document.querySelector('.type-strategy');
buttonStrategy?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Strategy");
    activeClass(filters.get(), buttonStrategy);
    gameCard.filters(filters.get());
});

const buttonAction = document.querySelector('.type-action');
buttonAction?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Action");
    activeClass(filters.get(), buttonAction);
    gameCard.filters(filters.get());
});

//inputs


//reset button

const buttonReset = document.querySelector('.reset');
buttonReset?.addEventListener('click', () => {
    filters.resetFilters();
    if (localStorage.getItem('button-class') !== null){
        localStorage.removeItem('button-class');
    }
    gameCard.filters(filters.get());
});


