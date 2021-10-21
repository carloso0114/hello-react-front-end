import FETCH_DATA from './greetings.types';

const initialData = [];

const DataReducer = (state = initialData, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return action.payload.greetings[0].message;
    }
    default:
      return state;
  }
};

export default DataReducer;
