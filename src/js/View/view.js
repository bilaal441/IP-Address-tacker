export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();

    this.#clear();
    this.#insertMarkup(markup);
  }

  #insertMarkup(markup) {
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
  #clear() {
    this._parentElement.innerHTML = "";
  }
}
