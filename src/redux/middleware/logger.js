const logger = (store) => (next) => (action) => {
  console.log('Dispatching action', action);
  const result = next(action);
  console.log('Action dispatched', action);
  return result;
};

export default logger;
