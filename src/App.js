/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import axios from 'axios';
import Scroll from './Scroll';

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
			return value.name.toLowerCase().includes(searchField);
		}));
	}

	if(robotsList.length === 0){
		return <h1>Loading</h1>
	}else{
		return (
			<div className='tc'>
				<h1 className='f1'> Robofriends </h1>
				<SearchBox searchChange={val => onSearchChange(val)}/>
				<Scroll>
					<CardList robots={robotsList} />
				</Scroll>
			</div>
		);
	}
}

export default App;