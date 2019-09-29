import { cloneDeep } from 'lodash';

import { UPDATE_FILE_SEARCH_STRING, FETCH_FILES_START, FETCH_FILES_SUCCESS } from "./ActionsTypes";

// TO-DO: Move to file

const defaultState = {
  files: [
  ],
  commits: {
  },
  searchString: '',
};

// TO-DO: combineReducers()

const rootReducer = (action, state = defaultState) => {
  switch (action.type) {
    case '@@init':
      return defaultState;
    case FETCH_FILES_START:
      // not implemented
      return state;
    case FETCH_FILES_SUCCESS: {
      const newState = {
        ...action.json,
      };
      return newState;
    }
    case UPDATE_FILE_SEARCH_STRING: {
      const newState = cloneDeep(state);
      const shownFiles = state.files
        .filter((file) => file.name.startsWith(action.searchString))
        .map((file) => file.id);
      return { ...newState, shownFiles, searchString: action.searchString };
    }
    default:
      return state;
  }
};

export default rootReducer;
