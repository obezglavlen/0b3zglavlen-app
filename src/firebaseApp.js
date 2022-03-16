import { onAuthStateChanged, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import config from "./.firebase.config.json";

export const app = initializeApp(config);
export const db = getFirestore();
