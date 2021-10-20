const GET_GREETINGS = 'GET_GREETINGS';
const GET_GREETINGS_SUCCESS = 'GET_GREETINGS_SUCCESS';
const GET_GREETINGS_ERR = 'GET_GREETINGS_ERR';

const URL = 'https://api.spacexdata.com/v3/missions';

const getGreetings = () => async (dispatch) => {
  dispatch({ type: GET_GREETINGS });
  const response = await fetch(URL);
  const greetings = await response.json();
  return dispatch({ type: GET_GREETINGS_SUCCESS, greetings });
};

export {
  getGreetings as default,
  GET_GREETINGS,
  GET_GREETINGS_SUCCESS,
  GET_GREETINGS_ERR,
};