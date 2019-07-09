/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import axios from 'axios';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

const App = () => {
	const [searchField, setSearchField] = useState('');
	//this robot const is array
	const [robotsList, setRobotsList] = useState([]);

	//empty array for one execution = componentDidMount
	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => response.data)
		.then(users => {setRobotsList(users)})
		.catch((err) => {console.log(err);});
	}, []);

	//receive value from child, set it up here
	const onSearchChange = (event) => {
		setSearchField(event.target.value);
		setRobotsList(robotsList.filter(value => {
			return value.name.toLowerCase().includes(searchField.toLocaleLowerCase());
		}));
	}

	return !robotsList.length ?
		<h1>Loading</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'> Robofriends </h1>
				<SearchBox searchChange={val => onSearchChange(val)}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={robotsList} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
}

export default App;