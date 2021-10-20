import { GET_GREETINGS, GET_GREETINGS_SUCCESS, GET_GREETINGS_ERR } from "../slices/greetingsSlice";

const initialState = {
  greetings: [
    {
      message: '',
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return { ...state, pending: true };
    case GET_GREETINGS_SUCCESS:
    {
      const data = action.missions;
      const subset = [];
      data.forEach((mission) => {
        subset.push(
          {
            mission_id: mission.mission_id,
            mission_name: mission.mission_name,
            description: mission.description,
          },
        );
      });
      return { ...state, pending: false, missions: subset };
    }
    case GET_GREETINGS_ERR:
      return { ...state, pending: false, error: action.error };
    default:
      return state;
  }
};

export default reducer;