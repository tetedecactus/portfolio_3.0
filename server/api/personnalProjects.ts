import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { Request, Response } from "express";

// Config Firebase à partir des variables d'environnement
const firebaseConfig = {
  apiKey: process.env.VITE_NUXT_API_KEY,
  authDomain: process.env.VITE_NUXT_AUTH_DOMAIN,
  projectId: process.env.VITE_NUXT_PROJECT_ID,
  storageBucket: process.env.VITE_NUXT_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_NUXT_MESSAGING_SENDER_ID,
  appId: process.env.VITE_NUXT_APP_ID,
  measurementId: process.env.VITE_NUXT_MEASUREMENT_ID,
};

// Initialisez l'application Firebase et récupérez l'instance de Firestore
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);

// Endpoint pour obtenir les données des projets depuis Firestore
export default async (req: Request, res: Response) => {
  try {
    // Obtenir une référence à la collection
    const colRef = collection(db, "personnalProjects");

    // Obtenir les documents de la collection
    const querySnapshot = await getDocs(colRef);

    // Transformez les données Firestore en un tableau JavaScript
    const projectsPersoData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return projectsPersoData;

    // Envoyer les données au client
    res.status(200).json(projectsPersoData);
  } catch (error) {
    console.error("Erreur lors de la récupération des documents :", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
