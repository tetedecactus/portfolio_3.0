import { getFirestore } from "firebase-admin/firestore";
import { initializeApp, getApps, cert } from "firebase-admin/app";

const apps = getApps();

// check si apps existe, si non on l'initialise
if (!apps.length) {
  initializeApp({
    credential: cert("./portfolionuxt3-firebase-adminsdk.json"),
  });
}

export default async (req, res) => {
  const db = getFirestore();
  const projects = await db.collection("projects").get();
  const projects42Data = projects.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return projects42Data;
};
