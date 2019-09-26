import Store from './redux/Store';

const store = new Store(() => console.log('Reducer called'));

const unsub1 = store.subscribe(() => console.log('listener 1 called'));
const unsub2 = store.subscribe(() => console.log('listener 2 called'));
const unsub3 = store.subscribe(() => console.log('listener 3 called'));

console.log(store.getListeners());
store.dispatch({type: 'test'});
unsub2();
store.dispatch({type: 'test'});
