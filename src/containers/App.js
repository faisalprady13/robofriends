/* eslint-disable no-console */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';
import axios from 'axios';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	//just a prop
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}	
}

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: []
		}
	}

	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => response.data)
		.then(users => {this.setState({robots:users})})
		.catch((err) => {console.log(err);}
		);
	}

	render(){
		const {robots} = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLocaleLowerCase());
		});
		return !robots.length ?
		<h1>Loading</h1> : 
		(
			<div className='tc'>
				<h1 className='f1'> Robofriends </h1>
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					<ErrorBoundary>
						<CardList robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);