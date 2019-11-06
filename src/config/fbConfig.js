import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCQGhwirN5-YEfFDLB4YsiACwPIg4zrMDE",
    authDomain: "pwbreact.firebaseapp.com",
    databaseURL: "https://pwbreact.firebaseio.com",
    projectId: "pwbreact",
    storageBucket: "pwbreact.appspot.com",
    messagingSenderId: "636153764125",
    appId: "1:636153764125:web:b2f63b53211118175be9f4",
    measurementId: "G-45ZH4HRRYY"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;