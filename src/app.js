import Store from './redux/Store';

import repoBrowserReducer from './components/RepoBrowser/RepoBrowserReducer';
import RepoBrowserView from './components/RepoBrowser/RepoBrowserView';

const store = new Store(repoBrowserReducer);

const repoBrowserView = new RepoBrowserView(document.querySelector('.RepoBrowserView'), store);
