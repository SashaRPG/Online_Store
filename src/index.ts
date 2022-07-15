//import gameCard from './game-cards';
import IGameCard from './game-cards/game-card.interface';
import workWithStorage from './utilites';
import gameWithFilters from './utilites/games_with_filters';
import { IFilters } from './utilites';
import './style/index.css';

const gameCard = new gameWithFilters();
const filters = new workWithStorage();
const state = filters.get();

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


function activeClass(state: IFilters) {
    if (state.platform.includes('PS')){
        buttonPS?.classList.add('active');
    }else{
        buttonPS?.classList.remove('active');
    }
}
const buttonPS = document.querySelector('.type-ps');
activeClass(state);
buttonPS?.addEventListener('click', () => {
    filters.setArrayElements("platform", "PS");
    activeClass(filters.get());
    gameCard.filters(filters.get());
});


