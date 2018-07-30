import { combineReducers } from 'redux';

const initialState = {
  city: "Please Select",
  jobs: []
};

const cityReducer = (state = initialState.city, action) => {
  switch(action.type) {
    case "SWITCH_LOCATION":
      return action.city;
    default:
      return state;
  }
};

const jobsReducer = (state = initialState.jobs, action) => {
  switch(action.type) {
    case "SWITCH_LOCATION":
      return action.jobs;
    default:
      return state;
  }
}

export default combineReducers({
  city: cityReducer,
  jobs: jobsReducer
});
