import { types } from "../types/types";

export const reducerRegister = (state = {}, action) => {
  switch (action.type) {
    case types.register:
      return {
        name: action.payload.name,
        email: action.payload.email,
      };

    default:
      return state;
  }
};
