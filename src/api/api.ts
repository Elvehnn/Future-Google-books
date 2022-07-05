import axios from 'axios';
import { PATH } from '../constants/paths';

const API_URL = PATH.API_URL;

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    if (error.response.data.statusCode === 401) {
      // localStorage.removeItem('user');
      // window.location.replace(PATH.AUTHORIZATION_ERROR);
    }
  }
);

export const getVolumesByTerms = async (searchString: string, lastIndex: number) => {
  return await axios
    .get(`${API_URL}?q=${searchString}&startIndex=${lastIndex}&maxResults=30`)
    .then((res) => {
      return res.data;
    });
};
