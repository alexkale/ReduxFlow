/* eslint-disable class-methods-use-this */
import View from '../../redux/View';

import { searchFiles } from '../../ActionCreators';

export default class SearchView extends View {
  /**
   * Class constructor
   * @param {Node} element
   * @param {Store} store
   */
  constructor(element, store) {
    super(element, store);

    this.onSearchBtnClick = this.onSearchBtnClick.bind(this);

    // Handle events in the root element for this view because of re-renders
    this.el.addEventListener('click', this.onSearchBtnClick);
  }

  destroy() {
    super.destroy();
    this.el.removeEventListener('click', this.onSearchBtnClick);
  }

  /**
   * Handles Search button click
   * @param {Event} event
   */
  onSearchBtnClick(event) {
    if (event.target.tagName === 'BUTTON') {
      this.store.dispatch(searchFiles(this.el.querySelector('input').value));
    }
  }

  render(state) {
    return `
        <input type="text" class="Search-Input TextInput" placeholder="Search files..." value=${state.searchString}>
        <button class="Search-Button Button Button_search">Search</button>`;
  }
}
