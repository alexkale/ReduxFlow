import { cloneDeep } from 'lodash';

import { FETCH_FILES_START, FETCH_FILES_SUCCESS, FETCH_FILES_FAILED } from './ActionsTypes';

const defaultState = {
  files: [
  ],
  commits: {
  },
  searchString: '',
};

const rootReducer = (action, state) => {
  switch (action.type) {
    case '@@init':
      return defaultState;
    case FETCH_FILES_START:
      return { ...cloneDeep(state), searchString: action.searchString };
    case FETCH_FILES_SUCCESS: {
      const newState = {
        ...action.json,
      };
      return newState;
    }
    case FETCH_FILES_FAILED:
      return cloneDeep(state);
    default:
      return state;
  }
};

export default rootReducer;
