export default class Store {
  constructor(reducer) {
    this.reducer = reducer;
    this.listeners = [];
    this.state = undefined;

    this.dispatch({
      type: '@@init',
    });
  }

  getState() {
    return this.state;
  }

  getListeners() {
    return this.listeners;
  }

  subscribe(callback) {
    const l = this.listeners.push(callback);
    return () => {
      console.log(`Deleting listener ${l}`);
      this.listeners.splice(l - 1, 0);
    };
  }
}
