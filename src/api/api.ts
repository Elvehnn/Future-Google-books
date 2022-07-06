import axios from 'axios';
import { PATH } from '../constants/paths';

const API_URL = PATH.API_URL;

// axios.interceptors.response.use(
//   function (response) {
//     // Any status code that lie within the range of 2xx cause this function to trigger
//     return response;
//   },
//   function (error) {
//     if (error.response.data.statusCode > 400) {
//       console.log(error);
//     }
//   }
// );

export const getVolumesByTerms = async (searchString: string, searchOptions: string) => {
  return await axios
    .get(`${API_URL}?q=${searchString}${searchOptions}&maxResults=30`)
    .then((res) => {
      return res.data;
    });
};

export const getVolumeById = async (id: string, apiKey: string) => {
  return await axios.get(`${API_URL}/${id}?key=${apiKey}`).then((res) => {
    return res.data;
  });
};
