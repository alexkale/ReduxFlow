import Store from './redux/Store';

import applyMiddleware from './redux/applyMiddleware';
import createStore from './redux/createStore';

import thunk from './redux/middleware/thunk';
import logger from './redux/middleware/logger';

import RepoBrowserView from './components/RepoBrowser/RepoBrowserView';
import SearchView from './components/Search/SearchView';

import rootReducer from './rootReducer';
import { searchFiles } from './ActionCreators';

const KEY_CODES = {
  ENTER: 13,
};

// TO-DO: middleware

/**
 * App setup
 */
document.addEventListener('DOMContentLoaded', () => {
  const store = createStore(rootReducer, applyMiddleware([thunk, logger]));
  const repoBrowserView = new RepoBrowserView(document.querySelector('.RepoBrowser'), store);
  const searchView = new SearchView(document.querySelector('.Search'), store);

  document.body.addEventListener('keypress', (event) => {
    if (event.keyCode === KEY_CODES.ENTER) {
      const { nextElementSibling } = event.target;
      if (nextElementSibling && nextElementSibling.tagName === 'BUTTON') {
        nextElementSibling.click();
      }
    }
  });

  store.dispatch(searchFiles());
});
