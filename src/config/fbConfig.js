import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBCP8T-dAWrmh-I3Nz5GVBjJ9gjMCOuHJQ",
    authDomain: "react-ninja-f96fb.firebaseapp.com",
    projectId: "react-ninja-f96fb",
    storageBucket: "react-ninja-f96fb.appspot.com",
    messagingSenderId: "584362248397",
    appId: "1:584362248397:web:078420d4c56e200a50c184",
    measurementId: "G-7SZWYMGMZ0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots:true})

  export default firebase