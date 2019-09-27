export default class View {
  constructor(element, store) {
    this.el = element;
    this.store = store;
    this.unsibscribe = store.subscribe((newState) => this.update(newState));
    this.update(store.getState());
  }

  destroy() {
    this.unsibscribe();
    this.el.innerHTML = '';
  }

  update(state) {
    this.el.innerHTML = this.render(state);
  }

  render() {
    throw new Error('Method render not implemented');
  }
}
