import axios from 'axios';
import { PATH } from '../constants/paths';

const API_URL = PATH.API_URL;

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
