import { makeAutoObservable } from "mobx";
import axios from 'axios';

class FetchCards {

    cards = [];

    constructor(){
        makeAutoObservable(this)
    }

    fetchCards() {
        axios.get("http://contest.elecard.ru/frontend_data/catalog.json")
            .then((response) => {
                for (let i=0; i < 59; i++) { //i < response.data.length
                    this.cards.push(response.data[i]);
                }
                // this.cards = [...response.data]

                // console.log(this.cards);
            })
            .catch(error => console.error(error));
        }
}

export default new FetchCards()