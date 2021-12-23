import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALK55sC7S-nwsOIpkFMfr4XykFYU6o2rE",
  authDomain: "prueba-salida-360fb.firebaseapp.com",
  projectId: "prueba-salida-360fb",
  storageBucket: "prueba-salida-360fb.appspot.com",
  messagingSenderId: "209038895154",
  appId: "1:209038895154:web:829e756b0427401eaef42b",
  measurementId: "G-XGTYC55XGC",
};

const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider();
const facebook = new FacebookAuthProvider();

export { app, google, facebook };
