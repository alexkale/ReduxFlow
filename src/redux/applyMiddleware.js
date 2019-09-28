const applyMiddleware = (middleware) => (store) => {
  if (typeof middleware !== 'function' && !Array.isArray(middleware)) {
    throw new TypeError('middleware should be either a function or an array of functions');
  }

  let { dispatch } = store;

  // Ordering is like in function composition: a • b • c = c(b(a(x)))
  for (let i = middleware.length - 1; i >= 0; i--) {
    dispatch = middleware[i](store)(dispatch);
  }

  store.dispatch = dispatch;

  return store;
};

export default applyMiddleware;
