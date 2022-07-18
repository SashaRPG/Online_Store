import gameCard from "../game-cards";
import { IFilters } from "../utilites/index";
import IGameCard from "../game-cards/game-card.interface"

const sorting = {
    'New': (a: IGameCard, b: IGameCard) => b.year - a.year,
    'Old': (a: IGameCard, b: IGameCard) => a.year - b.year,
    'Z-A': (a: IGameCard, b: IGameCard) =>
      b.name.toLowerCase().localeCompare(a.name.toLowerCase()),
    'A-Z': (a: IGameCard, b: IGameCard) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
}
 
class gameWithFilters {
    container: HTMLElement;
    constructor(){
        this.container = document.querySelector('.games') as HTMLElement;
    }

    addInContainer(elArr: HTMLElement[]) {
        this.container.innerHTML = '';
        this.container.append(...elArr);
    }

    async getGameData() {
        return await fetch('./assets/data.json').then((res) => res.json()); 
    }

    async filters(filt: IFilters) {
        const internet = String(filt.internet) === 'true' ? 'Required' : 'Not required';
        const hits = String(filt.hits) === 'true';
        let filteredGames: IGameCard[] = await this.getGameData();
        filteredGames = filteredGames.filter((el) => { 
            return filt.platform.every((f) => el.platform.includes(f));
        }).filter((el) => {
            if (!filt.publisher.length){
                return el;
            }
            return filt.publisher.some((p) => el.publisher.includes(p));
        }).filter((el) => {
            if (!filt.genre.length){
                return el;
            }
            return filt.genre.some((g) => el.genre.includes(g));
        }).filter((el) => {
            if (internet === 'Required') {
                return internet === el.internet;
            }
            return el;
        }).filter((el) => {
            if (hits){
                return hits === el.popular;
            }
            return el; 
        }).filter((el) => {
            return el.name.toLowerCase().includes(filt.search.toLowerCase());
        }).sort(sorting[filt.sortBy]);
        this.showCards(filteredGames);
    }

    showCards(cards: IGameCard[]) {
        if (!cards.length){
            this.emptySearch();
            return;
        }
        this.addInContainer(cards.map(el => gameCard(el)));
    }

    emptySearch() {
        const paragraph = document.createElement('p');
        paragraph.className = 'wrong__search';
        paragraph.textContent = 'Your search is invalid!';
        this.addInContainer([paragraph]);
    }
}

export default gameWithFilters;