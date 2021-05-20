import firebase from 'firebase';

var firebaseConfig = {
  apiKey:AIzaSyAGVq7WP3wC4NjpZEP8utHZ58S4pCs-i2o,
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