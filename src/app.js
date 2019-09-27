import Store from './redux/Store';

import repoBrowserReducer from './components/RepoBrowser/RepoBrowserReducer';
import RepoBrowserView from './components/RepoBrowser/RepoBrowserView';

document.addEventListener('DOMContentLoaded', () => {
  const store = new Store(repoBrowserReducer);
  const repoBrowserView = new RepoBrowserView(document.querySelector('.RepoBrowserView'), store);
});
