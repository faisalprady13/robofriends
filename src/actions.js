import axios from 'axios';

import { CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';

//this action returns OBJECT
export const setSearchField = (text) => {
  return{
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}

//this action returns FUNCTION
export const requestRobots = () => (dispatch) => {
  dispatch({ type:REQUEST_ROBOTS_PENDING });
  axios.get('https://jsonplaceholder.typicode.com/users')
		.then(response => response.data)
		.then(users => dispatch({type: REQUEST_ROBOTS_SUCCESS, payload: users}))
		.catch((error) => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error})
		);
}