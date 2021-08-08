import 'core-js/stable';
import 'regenerator-runtime/runtime';

import style from '../scss/main.scss';

import Header from './View/header.js';
import * as model from './model';
import Ipaddressdata from './View/Ipaddressdata.js';
import map from './View/map.js';
import Search from './View/Search.js';

const controlLoadCurrentDatat = async function () {
  try {
    await model.loadData(await model.loadIpAdress());
    console.log(model.state.currentdata);
    Ipaddressdata.render(model.state.currentdata);
    map.rederMap(model.state.currentdata);
  } catch (err) {
    console.log(err);
  }
};

const controlSearchData = async function () {
  try {
    const quiry = Search.getQuery();
    if (!quiry) return;
    await model.loadData(quiry);
    Ipaddressdata.render(model.state.currentdata);

    map.updateMap(model.state.currentdata);
  } catch (err) {
    console.log(err);
  }
};

const innit = function () {
  Search.addHandlerSearch(controlSearchData);
  Ipaddressdata.addHandlerRender(controlLoadCurrentDatat);
};

innit();
