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
import Switch from './components/switch/Switch';
import SortBy from './components/sortby/SortBy';

const App = observer(() => {
	const [cards, setCards] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isFetching, setIsFetching] = useState(FetchCards.isFetching);
	const [switchView, setSwitchView] = useState('cards');
	const [sortBy, setSortBy] = useState('none');

	useEffect(() => {
		FetchCards.fetchCards();
	}, [])

	useEffect(() => {
		setCards(FetchCards.cards.sort(chooseSort));
	}, [FetchCards.cards, sortBy])

	useEffect(() => {
		setIsFetching(FetchCards.isFetching);
	}, [FetchCards.isFetching])


	const handlePageChange = (e, value) => {
		setCurrentPage(value);
	};

	function chooseSort(firstElem, secondElem) {
		switch (sortBy) {
			case 'none':
				return 0;
				break;
			case 'sort_category':
				return firstElem.category.localeCompare(secondElem.category);
				break;
			case 'sort_date':
				return firstElem.timestamp - secondElem.timestamp;
				break;
			case 'sort_name':
				let str1 = String(firstElem.image);
				let index_str1 = str1.lastIndexOf('/');
				let str2 = String(secondElem.image);
				let index_str2 = str2.lastIndexOf('/');
				return str1.slice(index_str1).localeCompare(str2.slice(index_str2));
				break;
			case 'sort_filesize':
				return firstElem.filesize - secondElem.filesize;
				break;
		}
	}

	return (
		<div className='App'>
			{isFetching ? <img src={preloader} alt='preloader' className='preloader' /> : null}
			<Header />
			<div className='switch_and_sort'>
				<Switch switchView={switchView} setSwitchView={setSwitchView} />
				<SortBy sortBy={sortBy} setSortBy={setSortBy} />
			</div>
			{switchView == 'cards' ?
				<div className='cards'>
					<div className='cards_view'>
						{cards.slice((currentPage - 1) * 12, currentPage * 12).map(card => <Card key={card.image} card={card} />)}
					</div>
					<div className='pagination'>
						<Pagination count={Math.ceil(cards.length / 12)} onChange={handlePageChange} variant="outlined" />
					</div>
				</div>
				: null
			}

			{switchView == 'tree' ?
				<div className='tree'>
					{
						FetchCards.categories.map((category) => true ? <Tree key={category} content={category}>{cards.map(card => card.category == (category.toLowerCase()) ? <TreeComponent key={card.image} content={card.image} img={'http://contest.elecard.ru/frontend_data/' + card.image} /> : null)}</Tree> : null)
					}
				</div>
				: null}
			<Footer />
		</div>
	);
})

export default App;
