export interface IFilters {
    search: string;
    sortBy: "A-Z" | "Z-A" | "Old" | "New";
    platform: string[];
    publisher: string[]; 
    genre: string[];
    internet: boolean;
    hits: boolean;
}

class workWithStorage {
    storage: Storage;
    storeKey: string;
    state: IFilters;
    constructor(){
        this.storeKey = 'filters';
        this.storage = localStorage;
        this.state = {search: '', sortBy: 'A-Z', platform: [], publisher: [], genre: [], internet: false, hits: false};
        if (!this.storage.hasOwnProperty(this.storeKey)){
            this.resetFilters();
        } 
    }

    get() {
        return JSON.parse(this.storage.getItem(this.storeKey) as string);
    }
/*     set(key: string, value: [string] | number | string | boolean) {
        
    } */

    setArrayElements(key: string, value: string) {
        const filters = this.get();
        if (key === 'internet' || key === 'hits'){
            filters[key] = value;
        } else if (filters[key].includes(value)){
            filters[key].splice(filters[key].indexOf(value), 1);
        } else {
            filters[key].push(value);
        }
        this.saveInStorage(filters);
    }

    saveInStorage(filters: IFilters) {
        this.storage.setItem(this.storeKey, JSON.stringify(filters));
    }

    setBoolFilter(key: string){
        const filters = this.get();
        filters[key] = !filters[key];
        this.saveInStorage(filters);
    }

    setSearch(search: string) { 
        const filters = this.get();
        filters.search = search;
        this.saveInStorage(filters);
    }

    sortBy(sortBy: string) {
        const filters = this.get();
        filters.sortBy = sortBy;
        this.saveInStorage(filters);
    }

    resetFilters() {
        this.saveInStorage(this.state);
    }
}

export default workWithStorage;