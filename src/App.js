import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { observer } from 'mobx-react-lite';
import FetchCards from './store/FetchCards';
import Pagination from '@mui/material/Pagination';
import preloader from './img/preloader.svg';
import Tree from 'react-animated-tree';
import TreeComponent from './components/treeComponent/TreeComponent';

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
			<div className='cards'>
				<div className='cards_view'>
					{cards.slice((currentPage - 1) * 12, currentPage * 12).map(card => <Card id={card.image} key={card.image} card={card} />)}
				</div>
				<div className='pagination'>
					<Pagination count={Math.ceil(cards.length / 12)} onChange={handlePageChange} variant="outlined" />
				</div>
			</div>
			<div className='tree'>
				<Tree content='Animals'>
					{cards.map(card => card.category == 'animals' ? <TreeComponent content={card.image} img={'http://contest.elecard.ru/frontend_data/' + card.image} /> : null)}
				</Tree>
				<Tree content='Business'>
					{cards.map(card => card.category == 'business' ? <Tree content={card.img} visible /> : null)}
				</Tree>
				<Tree content='Food'>
					{cards.map(card => card.category == 'food' ? <Tree content={card.img} visible /> : null)}
				</Tree>
				<Tree content='Health'>
					{cards.map(card => card.category == 'health' ? <Tree content={card.img} visible /> : null)}
				</Tree>
				<Tree content='Places'>
					{cards.map(card => card.category == 'places' ? <Tree content={card.img} visible /> : null)}
				</Tree>
				<Tree content='Science'>
					{cards.map(card => card.category == 'science' ? <Tree content={card.img} visible /> : null)}
				</Tree>
				<Tree content='Vehicle'>
					{cards.map(card => card.category == 'vehicle' ? <Tree content={card.img} visible /> : null)}
				</Tree>
				<Tree content='Winter'>
					{cards.map(card => card.category == 'winter' ? <Tree content={card.img} visible /> : null)}
				</Tree>

			</div>
			{/* {cards.map(card => <Tree content={card.category} visible/>)} */}
			{/* <Tree content="Apple" type="Fruit" open canHide visible/>	
				<Tree content="Contents">
				<Tree content="Contents"></Tree>
				</Tree> */}
			<Footer />
		</div>
	);
})

export default App;
