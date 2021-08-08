import { AJAX } from "./helpers.js";
import { API_URL_GEO, API_Key, API_IP_URL } from "./config.js";

export const state = {
  currentdata: {},
};

export const loadIpAdress = async function () {
  try {
    const res = await AJAX(`${API_IP_URL}`);
    const { ip } = res;
    return ip;
  } catch (err) {
    console.log(err);
  }
};

export const loadData = async function (ipAddress) {
  try {
    const res = await AJAX(
      `${API_URL_GEO}?apiKey=${API_Key}&ipAddress=${ipAddress}`
    );

    state.currentdata = {
      ip: res.ip,
      isp: res.isp,
      timezone: res.location.timezone,
      location: res.location.city,
      lat: res.location.lat,
      lon: res.location.lng,
    };
  } catch (err) {
    console.log(err);
  }
};
