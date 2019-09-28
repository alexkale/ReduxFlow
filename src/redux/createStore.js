import Store from '../redux/Store';

/**
 * Creates store with given reducer
 * Ideally, support state object as argument to support state hydration
 * @param {Function} reducer
 * @param {Function} enhancer
 */
const createStore = (reducer, enhancer) => {
  let store = new Store(reducer);

  if (typeof enhancer === 'function') {
    store = enhancer(store);
  }

  return store;
};

export default createStore;
