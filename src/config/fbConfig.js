import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyDgc7PMG2Q_7-fqklGRUiC0xaNgDyF9ykY",
    authDomain: "postme-shahrukpro.firebaseapp.com",
    databaseURL: "https://postme-shahrukpro.firebaseio.com",
    projectId: "postme-shahrukpro",
    storageBucket: "postme-shahrukpro.appspot.com",
    messagingSenderId: "907811299429",
    appId: "1:907811299429:web:f64de1935f33a90d5ba68c",
    measurementId: "G-5ELVG7Y40J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;