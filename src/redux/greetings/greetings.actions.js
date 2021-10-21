import axios from 'axios';
import FETCH_DATA from './greetings.types';

// or you could use https://test-api-back-end.herokuapp.com/v1/greetings
const API = `http://localhost:3001/v1/greetings`;

export const addData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});

export const fetchData = () => async (dispatch) => {
  const res = await axios.get(API);
  dispatch(addData(res.data));
};