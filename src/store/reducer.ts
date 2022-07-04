import { INITIAL_STATE } from '../constants/initial-state';
import { Action } from '../constants/interfaces';

export default function contentReducer(state = INITIAL_STATE, action: Action) {
  const { payload } = action;

  switch (action.type) {
    // case 'content/change': {
    //   let object = payload.path.slice(1, -1).reduce((acc, item) => acc[item], newState);
    //   const index = payload.path.slice(-1).toString();
    //   const destination = getDestination(payload.path, state);

    //   if (typeof destination === 'boolean' && payload.typeOfValue === 'boolean') {
    //     object[index] = payload.newValue === 'true' ? true : false;

    //     return newState;
    //   }

    //   if (typeof destination === 'number' && payload.typeOfValue === 'number') {
    //     object[index] = parseFloat(payload.newValue);

    //     return newState;
    //   }

    //   if (typeof destination === 'string' && payload.typeOfValue !== 'object') {
    //     object[index] = payload.newValue;

    //     return newState;
    //   }

    //   object[index] = getObjectFromString(payload.newValue);

    //   return newState;
    // }

    // case 'content/add': {
    //   const object = payload.path.slice(1, -1).reduce((acc, item) => acc[item], newState);
    //   object.push(getObjectFromString(payload.newValue));

    //   return newState;
    // }

    default:
      return state;
  }
}
