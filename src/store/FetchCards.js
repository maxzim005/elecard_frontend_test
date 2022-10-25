import { makeAutoObservable } from "mobx";
import axios from 'axios';

class FetchCards {

    cards = [];
    isFetching = true;
    categories = ['Animals', 'Business', 'Food', 'Health', 'Places', 'Science', 'Vehicle', 'Winter'];
    constructor() {
        makeAutoObservable(this)
    }

    makeUniqArr(arr) {
        const uniqSet = new Set(arr);
        return [...uniqSet];
    }

    fetchCards() {
        let arrOfCategories = [];
        axios.get("http://contest.elecard.ru/frontend_data/catalog.json")
            .then((response) => {
                for (let i = 0; i < response.data.length; i++) {
                    if (!(response.data[i].image in localStorage)) {
                        this.cards.push(response.data[i]);
                        arrOfCategories.push(response.data[i].category);
                    }
                }
                this.isFetching = false;
                this.categories = this.makeUniqArr(arrOfCategories);
            })
            .catch(error => console.error(error));
    }
}

export default new FetchCards()