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

    async getGameData(){
        return await fetch('./assets/data.json').then((res) => res.json()); 
    }

    async filters(filt: IFilters){
        const internet = filt.internet ? "Required" : "Not required";
        let filteredGames: IGameCard[] = await this.getGameData();
        filteredGames = filteredGames.filter((el) => { 
            return filt.platform.every((f) => el.platform.includes(f));
        }).filter((el) => {
            return filt.publisher.every((p) => el.publisher.includes(p));
        }).filter((el) => {
            return filt.genre.every((g) => el.genre.includes(g));
        }).filter((el) => {
            return internet === el.internet;
        }).filter((el) => {
            return filt.hits === el.popular;
        }).filter((el) => {
            return el.name.toLowerCase().includes(filt.search.toLowerCase());
        }).sort(sorting[filt.sortBy]);
        this.showCards(filteredGames);
    }

    showCards(cards: IGameCard[]){
        this.addInContainer(cards.map(el => gameCard(el)));
    }
}

export default gameWithFilters;