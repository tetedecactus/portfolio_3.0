import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: process.env.VITE_NUXT_API_KEY,
  authDomain: process.env.VITE_NUXT_AUTH_DOMAIN,
  projectId: process.env.VITE_NUXT_PROJECT_ID,
  storageBucket: process.env.VITE_NUXT_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_NUXT_MESSAGING_SENDER_ID,
  appId: process.env.VITE_NUXT_APP_ID,
  measurementId: process.env.VITE_NUXT_MEASUREMENT_ID,
};

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_NUXT_API_KEY,
//   authDomain: import.meta.env.VITE_NUXT_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_NUXT_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_NUXT_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_NUXT_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_NUXT_APP_ID,
//   measurementId: import.meta.env.VITE_NUXT_MEASUREMENT_ID,
// };


const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth = getAuth(firebase);

// Obtenir une référence à la collection
const colRef = collection(db, 'personnalProjects');

// Obtenir les documents de la collection
getDocs(colRef)
  .then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération des documents :", error);
  });