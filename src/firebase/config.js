// npm install firebase and import as firebase
import firebase from 'firebase/app'
import 'firebase/firestore'
// firebase authentication
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB43QddYwpSSGc6ey0uYCea3rF4xJRSF7w",
  authDomain: "fir-firebase-493fa.firebaseapp.com",
  projectId: "fir-firebase-493fa",
  storageBucket: "fir-firebase-493fa.appspot.com",
  messagingSenderId: "615494483029",
  appId: "1:615494483029:web:17c80324c548dd1033e8dc"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init firestore
const projectFirestore = firebase.firestore()
// use the timestamp in firebase field
const timestamp = firebase.firestore.FieldValue.serverTimestamp
const projectAuth = firebase.auth()

export { projectFirestore, timestamp, projectAuth }