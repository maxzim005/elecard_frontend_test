import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { observer } from 'mobx-react-lite';
import FetchCards from './store/FetchCards';
import Pagination from '@mui/material/Pagination';
import preloader from './img/preloader.svg';

const App = observer(() => {
	const [cards, setCards] = useState([]);
	// const [filteredCards, setFilteredCards] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isFetching, setIsFetching] = useState(FetchCards.isFetching);

	// let filteredCards = cards.filter((card) => {
	// 	let keys = Object.keys(localStorage);
	// 	for (let key of keys) {
	// 		// console.log(`${key}: ${localStorage.getItem(key)}`);
	// 		if (card.image == localStorage.getItem(key))
	// 			return true;
	// 		else
	// 			return false;
	// 	}
	// });

	useEffect(() => {
		FetchCards.fetchCards();
	}, [])

	useEffect(() => { //timeout for testing
		// setTimeout(() => {
		// console.log('here 1');
		// let keys = Object.keys(localStorage);
		// console.log(keys);
		// console.log(keys.length);
		// if (!keys.length) {
		// 	setCards(FetchCards.cards)
		// 	console.log('here 2');
		// }
		// else {
		// 	console.log('here 3');
		// 	let initialArray = [];
		// 	let smth = [...FetchCards.cards];
		// 	smth.filter((card, i) => {
		// 		console.log('current forEach: '+i);
		// 		for (let key of keys) {
		// 			// console.log(`${key}: ${localStorage.getItem(key)}`);
		// 			// console.log(card.image + ' ' + localStorage.getItem(key));
		// 			if (card.image != localStorage.getItem(key)) {
		// 				return true
		// 				// console.log(initialArray);
		// 			}
		// 			else {
		// 				console.log('ЗАЕБАЛ');
		// 			}
		// 		}
		// 	});
		// 	console.log('here 4');
		// 	setCards(initialArray);
		// }
		// setCards(s);
		setCards(FetchCards.cards);
		// }, 1000)
	}, [FetchCards.cards]) //, localStorage.length

	useEffect(() => {
		// setTimeout(() => {
		setIsFetching(FetchCards.isFetching);
		// }, 1000)
	}, [FetchCards.isFetching])

	const handlePageChange = (e, value) => {
		setCurrentPage(value);
	};

	return (
		<div className='App'>
			{isFetching ? <img src={preloader} alt='preloader' className='preloader' /> : null}
			<Header />
			{/* <img src={preloader} alt='preloader' className='preloader' />  */}
			<div className='cards'>
				{cards.slice((currentPage - 1) * 12, currentPage * 12).map(card => <Card id={card.image} key={card.image} card={card} />)}
				{/* {cards.map(card => <Card card={card} />)} */}
				{/* {setTimeout(() => {
					console.log(cards);
				}, 2000)} */}
			</div>
			<div className='pagination'>
				<Pagination count={Math.ceil(cards.length / 12)} onChange={handlePageChange} variant="outlined" />
			</div>
			<Footer />
		</div>
	);
})

export default App;
