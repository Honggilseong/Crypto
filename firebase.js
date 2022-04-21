import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  authDomain: 'crypto-35908.firebaseapp.com',
  projectId: 'crypto-35908',
  storageBucket: 'crypto-35908.appspot.com',
  messagingSenderId: '656560845896',
  appId: '1:656560845896:web:fe1881ee6638867b6b947d',
  measurementId: 'G-GR7Z6LXZ87',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
