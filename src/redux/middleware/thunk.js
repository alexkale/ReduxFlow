const thunk = (store) => (next) => (action) => {
  console.log('Thunk middleware');
  if (typeof action === 'function') {
    console.log('Executing function in thunk');
    return action(next, store.getState);
  }
  console.log('Thunk passing action to the next middleware');
  return next(action);
};

export default thunk;
