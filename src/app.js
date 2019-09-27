import Store from './redux/Store';

import RepoBrowserView from './components/RepoBrowser/RepoBrowserView';
import SearchView from './components/search/SearchView';

import rootReducer from './rootReducer';

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store(rootReducer);
  const repoBrowserView = new RepoBrowserView(document.querySelector('.RepoBrowserView'), store);
  const searchView = new SearchView(document.querySelector('.SearchView'), store);
});
