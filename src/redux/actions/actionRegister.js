import { types } from "../types/types";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "@firebase/auth";
import { loginSync } from "./actionLogin";

const registerSync = (name, email) => {
  return {
    type: types.register,
    payload: {
      name,
      email,
    },
  };
};

export const registerAsync = (name, email, password) => {
  return (dispatch) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async ({ user }) => {
        await updateProfile(auth.currentUser, { displayName: name });

        dispatch(registerSync(user.displayName, user.email));

        dispatch(loginSync(user.uid, user.displayName));

        //console.log(user);
      })
      .catch((e) => {
        console.log(e);
      });
  };
};
