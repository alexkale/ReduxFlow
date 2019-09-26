export default class View {
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

  subscribe(callback) {
    this.listeners.push(callback);
    return () => this.listeners.splice(this.listeners.length - 1, 0);
  }
}
