import React, { useState } from 'react';
import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

const App = () => {
	const [searchField, setSearchField] = useState('');
	//this robot const is array
	const [robotsList, setRobotsList] = useState(robots);

	//receive value from child, set it up here
	const onSearchChange = (event) => {
		setSearchField(event.target.value);
		setRobotsList(robots.filter(value => {
			return value.name.toLowerCase().includes(searchField);
		}));
	}

	return (
		<div className='tc'>
			<h1> Robofriends </h1>
			<SearchBox searchChange={val => onSearchChange(val)}/>
			<CardList robots={robotsList} />
		</div>
	);
}

export default App;