import { initializeApp } from "firebase/app";

const firebaseConfig = {

  apiKey: "AIzaSyCG32wcfANBlertCgypoPPxtCcsDZNMXjg",
  authDomain: "oceanplugs.firebaseapp.com",
  projectId: "oceanplugs",
  storageBucket: "oceanplugs.appspot.com",
  messagingSenderId: "310906847210",
  appId: "1:310906847210:web:dc29050b33f8fbacf6fc93"

};

const app = initializeApp(firebaseConfig);

export const initFirestore = () => {
    return app
}