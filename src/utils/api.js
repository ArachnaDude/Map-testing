const axios = require("axios");

const api = axios.create({
  // baseURL: "https://api.openstreetmap.org/api/0.6/",
  baseURL: "https://nominatim.openstreetmap.org/",
});

// export const getLocationById = (searchTerm) => {
//   return api.get(`way/${searchTerm}`).then((res) => {
//     return res.data.elements[0].tags;
//   });
// };

export const getLocationByName = (searchTerm) => {
  return api.get(`search?q=${searchTerm}&format=json`).then((res) => {
    console.log(res.data);
  });
};
