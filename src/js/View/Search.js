import View from './view.js';

class Seach extends View {
  _parentElement = document.querySelector('.form');

  #getInput() {
    return this._parentElement.querySelector('.search__field');
  }
  #clearInput() {
    this.#getInput().value = '';
  }

  getQuery() {
    const query = this.#getInput().value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new Seach();
