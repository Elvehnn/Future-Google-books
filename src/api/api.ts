import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../constants/paths';

const API_URL = PATH.API_URL;

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    return response;
  },
  function (error) {
    if (error.response.data.statusCode === 403) {
      // localStorage.removeItem('user');
      // window.location.replace(PATH.AUTHORIZATION_ERROR);
    }

    if (error.response.data.statusCode === 404) {
      useNavigate()(PATH.NOT_FOUND);
    }
  }
);

export const getVolumesByTerms = async (
  searchString: string,
  lastIndex: number,
  apiKey: string
) => {
  return await axios
    .get(`${API_URL}?q=${searchString}&startIndex=${lastIndex}&maxResults=30&key=${apiKey}`)
    .then((res) => {
      return res.data;
    });
};

export const getVolumeById = async (id: string, apiKey: string) => {
  return await axios.get(`${API_URL}/${id}?key=${apiKey}`).then((res) => {
    return res.data;
  });
};
