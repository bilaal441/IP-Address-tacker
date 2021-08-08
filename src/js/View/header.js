import View from "./view.js";
import arrow from "../../images/icon.svg";
console.log(`${arrow}#icon-arrow`);
console.log(View);
class Header extends View {
  _parentElement = document.querySelector(".header-flex");

  constructor() {
    super();
    this.render();
  }

  _generateMarkup() {
    return `
    
        <h2 class="header-title">IP Address Tracker</h2>
    <form class="form">
      <input type="text" class="search__field" placeholder=" search any IP Address or domain " />
      <button class="btn-submit">
      <svg class="icon-search">
      <use href="${arrow}#icon-arrow"></use>
    </svg>
      </button>
    </form>
        
    
    `;
  }
}

export default new Header();
