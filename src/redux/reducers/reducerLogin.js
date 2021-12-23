import { types } from "../types/types";

export const reducerLogin = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        id: action.payload.id,
        name: action.payload.name,
        logged: true,
      };

    default:
      return state;
  }
};
