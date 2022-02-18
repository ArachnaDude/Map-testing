const axios = require("axios");

const api = axios.create({
  // baseURL: "https://api.openstreetmap.org/api/0.6/",
  baseURL: "https://nominatim.openstreetmap.org/",
});

const osmApi = axios.create({
  baseURL: "https://api.openstreetmap.org/api/0.6/",
});

export const getLocationByOsmIdOsmtype = (osmType, osmId) => {
  return osmApi.get(`${osmType}/${osmId}`).then((res) => {
    // console.log(res.data.elements[0]);
    return res.data.elements[0];
  });
};

export const getLocationByName = (searchTerm) => {
  return api
    .get(`search?q=${searchTerm}&format=json&addressdetails=1&polygon_svg=1`)
    .then((res) => {
      return res.data;
    });
};

// https://nominatim.openstreetmap.org/search?q=the+pub&format=json&addressdetails=1&polygon_svg=1
