import axios from 'axios';

const API_URL = "https://api.chucknorris.io/jokes";
class PostsService {
  getPost() {
    return axios.get(API_URL + '/search?query=all');
  }
}
export const postsService= new PostsService();