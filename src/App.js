import React, {useState, useEffect} from 'react';
import './App.css';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { observer } from 'mobx-react-lite';
import FetchCards from './store/FetchCards';
import Pagination from '@mui/material/Pagination';

const App = observer(() => {
	const [cards, setCards] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
        FetchCards.fetchCards();
    }, [])

	useEffect(() => {
        setCards(FetchCards.cards);
    }, [FetchCards.cards])

	const handlePageChange = (e, value) => {
        setCurrentPage(value);
        // console.log(currentPage);
    };

	return (
		<div className='App'>
			<Header />
			<div className='cards'>
				{cards.slice((currentPage-1)*12, currentPage*12).map(card => <Card card={card} />)}
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
