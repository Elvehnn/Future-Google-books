import { ErrorObject } from '../constants/interfaces';

export const generateErrorObject = (title: string, description: string): ErrorObject => {
  return { title, description };
};
