export default class Store {
  constructor(reducer) {
    this.reducer = reducer;
    this.listeners = [];
    this.state = undefined;

    this.dispatch({
      type: '@@init',
    });

    console.log('STORE: initialized');
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
    console.log(`STORE: New listener subscribing to store updates: ${callback}`);
    this.listeners.push(callback);
    return () => {
      const idx = this.listeners.indexOf(callback);
      console.log(`STORE: Listener #${idx}unsubscribed`);
      this.listeners.splice(idx, 1);
    };
  }

  /**
   * Notify subscribers on state change
   */
  runListeners() {
    console.log('Store notifying listeners');
    this.listeners.forEach((callback) => {
      callback(this.state);
    });
  }

  /**
   * Dispatch action to store
   * @param {Object} action
   */
  dispatch(action) {
    console.log('STORE: dispatching action', action);
    this.state = this.reducer(action, this.state);
    this.runListeners();
  }
}
