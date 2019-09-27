import Store from './redux/Store';

import RepoBrowserView from './components/RepoBrowser/RepoBrowserView';
import SearchView from './components/Search/SearchView';

import rootReducer from './rootReducer';

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store(rootReducer);
  const repoBrowserView = new RepoBrowserView(document.querySelector('.RepoBrowser'), store);
  const searchView = new SearchView(document.querySelector('.Search'), store);
});
