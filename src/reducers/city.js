import { SET_CITY } from './../actions/index';

export const city = (state, action) => {
   switch (action.type) {
      case SET_CITY:
         return { ...state, city: action.value }; // los ... se llaman split operation, llama a todo lo que tenga state, se ejecutan como una función
      default:
         return state;
   }
};
