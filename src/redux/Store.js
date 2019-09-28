export default class Store {
  constructor(reducer) {
    this.reducer = reducer;
    this.listeners = [];
    this.state = undefined;

    this.dispatch = this.dispatch.bind(this);

    this.dispatch({
      type: '@@init',
    });
  }

  /**
   * Return current store state
   */
  getState() {
    return this.state;
  }

  /**
   * Debug method
   */
  getListeners() {
    return this.listeners;
  }

  /**
   * Subscribe to store updates
   * @param {Function} callback
   */
  subscribe(callback) {
    this.listeners.push(callback);
    return () => {
      const idx = this.listeners.indexOf(callback);
      this.listeners.splice(idx, 1);
    };
  }

  /**
   * Notify subscribers on state change
   */
  runListeners() {
    this.listeners.forEach((callback) => {
      callback(this.state);
    });
  }

  /**
   * Dispatch action to store
   * @param {Object} action
   */
  dispatch(action) {
    this.state = this.reducer(action, this.state);
    this.runListeners();
    return action;
  }
}
