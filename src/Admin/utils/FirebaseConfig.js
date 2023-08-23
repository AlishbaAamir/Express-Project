
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBexkKagaueTWpB2dnoHuAqSpyE1Nn9Ep4",
  authDomain: "online-food-delivery-api.firebaseapp.com",
  projectId: "online-food-delivery-api",
  storageBucket: "online-food-delivery-api.appspot.com",
  messagingSenderId: "897157214825",
  appId: "1:897157214825:web:b0bd403c77642b7a28a8f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)