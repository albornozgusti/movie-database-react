import axios from "axios";


const omdbGetList = (params) => {
  const {
    apiUrl,
    apiKey,
    title,
    releaseYear,
    type,
    page = 1
  } = params;
  console.log('PARAMS: ', params);
  return axios.get(`${apiUrl}apikey=${apiKey}&s=${title}&type=${type}&y=${releaseYear}&page=${page}`)
  .then((response) => {
    return response.data;
  })
}

const omdbGetItem = (params) => {
  const {
    apiUrl,
    apiKey,
    omdbId
  } = params;
  return axios.get(`${apiUrl}apikey=${apiKey}&i=${omdbId}`)
  .then((response) => {
    return response.data;
  })
}

export {
  omdbGetList,
  omdbGetItem
};