import * as actions from "../../../actions_types";

const initialState = {
  allCities: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.ALL_CITIES:
      // console.log(action.payload, "ESTO ES EL REDUCER");
      return {
        ...state,
        allCities: action.payload,
      };

    default:
      return state;
  }
}
