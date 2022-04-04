import axios from 'axios';

const API_URL = "https://api.chucknorris.io/jokes";

export const  getPost = () => {
  return axios.get(API_URL + '/search?query=all');
}
export const  getPostRandom = () => {
  return axios.get(API_URL + '/random');
}
export const  getPostSearch = (value) => {
  if(value !== "") {
    return axios.get(API_URL + `/search?query=${value}`);
  }
  return axios.get(API_URL + "/search?query=all");
}
