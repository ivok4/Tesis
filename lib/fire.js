import firebase from 'firebase';

const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId:process.env.FIREBASE_PROJECT_ID,
  storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_SENDER_ID,
  appId:process.env.FIREBASE_SENDER_APPID
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;