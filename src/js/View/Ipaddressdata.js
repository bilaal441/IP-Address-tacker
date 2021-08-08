import View from "./view.js";

class ipaddress extends View {
  _parentElement = document.querySelector(".ipdata-container");

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _generateMarkup() {
    return `
    
      <div class="data-flex">
        <p class="title">ip address</p>
        <h2>${this._data.ip}</h2>
      </div>
      <div class="data-flex">
        <p class="title">location</p>
        <h2>${this._data.location}</h2>
      </div>
      <div class="data-flex">
        <p class="title">timezone</p>
        <h2>${this._data.timezone}</h2>
      </div>
      <div class="data-flex">
        <p class="title">Isp</p>
        <h2>${this._data.isp}</h2>
      </div>
    
    `;
  }
}

export default new ipaddress();
