import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL, listAll, ListResult } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.VITE_NUXT_API_KEY,
  authDomain: process.env.VITE_NUXT_AUTH_DOMAIN,
  projectId: process.env.VITE_NUXT_PROJECT_ID,
  storageBucket: process.env.VITE_NUXT_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_NUXT_MESSAGING_SENDER_ID,
  appId: process.env.VITE_NUXT_APP_ID,
  measurementId: process.env.VITE_NUXT_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const storageRef = ref(storage, 'gs://portfolionuxt3-96543.appspot.com');

export async function getImages() {
  const urls: string[] = [];
  const res = await listAll(storageRef);
  res.items.forEach(async (itemRef) => {
    const url = await getDownloadURL(itemRef);
    urls.push(url);
  });
  return urls;
}

