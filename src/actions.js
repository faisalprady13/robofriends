import { CHANGE_SEARCH_FIELD} from './constants';

export const setSearchField = (text) => {
  // eslint-disable-next-line no-console
  console.log(text);
  return{
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
}