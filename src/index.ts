//import gameCard from './game-cards';
//import IGameCard from './game-cards/game-card.interface';
import workWithStorage from './utilites';
import gameWithFilters from './utilites/games_with_filters';
import { IFilters } from './utilites';
import { showCart, clearCart } from './utilites/cart';
import './style/index.css';

const gameCard = new gameWithFilters();
const filters = new workWithStorage();
const state: IFilters = filters.get();

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

function activeClass(btn: Element | null) {
    if (!btn){
        return;
    }
    btn.classList.toggle('active');
}
function checkButton(state: IFilters){
    state.platform.forEach(el => {
        if (el === 'PS'){
            activeClass(buttonPS)
        } else if (el === 'XBox'){
            activeClass(buttonXbox);
        } else {
            activeClass(buttonPC);
        }
    });
    state.publisher.forEach(el => {
        if (el === 'EA'){
            activeClass(buttonEA);
        } else if (el === 'Valve'){
            activeClass(buttonValve);
        } else if (el === 'Microsoft'){
            activeClass(buttonMicrosoft);
        } else if (el === 'Sony CE'){
            activeClass(buttonSCE);
        } else {
            activeClass(buttonOthers);
        }
    });
    state.genre.forEach(el => {
        if (el === 'Shooters'){
            activeClass(buttonShooter);
        } else if (el === 'Racing'){
            activeClass(buttonRacing);
        } else if (el === 'Platformer'){
            activeClass(buttonPlatformer);
        } else if (el === 'Action'){
            activeClass(buttonAction);
        } else {
            activeClass(buttonStrategy);
        }
    });
}

//buttons for gaming platforms

const buttonPS = document.querySelector('.type-ps');
buttonPS?.addEventListener('click', () => {
    filters.setArrayElements("platform", "PS");
    activeClass(buttonPS);
    gameCard.filters(filters.get());
});

const buttonPC = document.querySelector('.type-pc');
buttonPC?.addEventListener('click', () => {
    filters.setArrayElements("platform", "PC");
    activeClass(buttonPC);
    gameCard.filters(filters.get());
});

const buttonXbox = document.querySelector('.type-xbx');
buttonXbox?.addEventListener('click', () => {
    filters.setArrayElements("platform", "XBox");
    activeClass(buttonXbox);
    gameCard.filters(filters.get());
});

//buttons for publishers

const buttonEA = document.querySelector('.type-ea');
buttonEA?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "EA");
    activeClass(buttonEA);
    gameCard.filters(filters.get());
});

const buttonValve = document.querySelector('.type-valve');
buttonValve?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Valve");
    activeClass(buttonValve);
    gameCard.filters(filters.get());
});

const buttonMicrosoft = document.querySelector('.type-microsoft');
buttonMicrosoft?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Microsoft");
    activeClass(buttonMicrosoft);
    gameCard.filters(filters.get());
});

const buttonSCE = document.querySelector('.type-sce');
buttonSCE?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Sony CE");
    activeClass(buttonSCE);
    gameCard.filters(filters.get());
});

const buttonOthers = document.querySelector('.type-others');
buttonOthers?.addEventListener('click', () => {
    filters.setArrayElements("publisher", "Other");
    activeClass(buttonOthers);
    gameCard.filters(filters.get());
});

//buttons for genres

const buttonShooter = document.querySelector('.type-shooter');
buttonShooter?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Shooter");
    activeClass(buttonShooter);
    gameCard.filters(filters.get());
});

const buttonRacing = document.querySelector('.type-racing');
buttonRacing?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Racing");
    activeClass(buttonRacing);
    gameCard.filters(filters.get());
});

const buttonPlatformer = document.querySelector('.type-platformer');
buttonPlatformer?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Platformer");
    activeClass(buttonPlatformer);
    gameCard.filters(filters.get());
});

const buttonStrategy = document.querySelector('.type-strategy');
buttonStrategy?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Strategy");
    activeClass(buttonStrategy);
    gameCard.filters(filters.get());
});

const buttonAction = document.querySelector('.type-action');
buttonAction?.addEventListener('click', () => {
    filters.setArrayElements("genre", "Action");
    activeClass(buttonAction);
    gameCard.filters(filters.get());
});

//inputs
const [internet, hits] = document.querySelectorAll('input[type="checkbox"]');
(internet as HTMLInputElement).checked = String(state.internet) === 'true';
(hits as HTMLInputElement).checked = String(state.hits) === 'true';
internet.addEventListener('change', () => {
    filters.setArrayElements("internet", String((internet  as HTMLInputElement).checked));
    gameCard.filters(filters.get());
});

hits.addEventListener('change', () => {
    filters.setArrayElements("hits", String((hits  as HTMLInputElement).checked));
    gameCard.filters(filters.get());
})

//reset filters button
const sortSelection = document.querySelector('.filters__sort');
const buttonReset = document.querySelector('.reset');
buttonReset?.addEventListener('click', () => {
    filters.resetFilters();
    const allActiveButtons = document.querySelectorAll('.active');
    allActiveButtons.forEach((el) => {
        el.classList.remove('active');
    });
    (sortSelection as HTMLInputElement).value = "A-Z";
    (internet as HTMLInputElement).checked = false;
    (hits as HTMLInputElement).checked = false;
    gameCard.filters(filters.get());
});

//reset cart button
const buttonResetCart = document.querySelector('.reset_cart');
buttonResetCart?.addEventListener('click', () => {
    const allActiveBuyButtons = document.querySelectorAll('.active__buy');
    allActiveBuyButtons.forEach( el => {
        el.classList.remove('active__buy');
    })
    clearCart();
});
showCart();
checkButton(state);