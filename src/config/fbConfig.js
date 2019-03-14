import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAeJOp5zT9VugrNCYmfSYOOhdUIT6yPtac",
  authDomain: "project-management-tool-17162.firebaseapp.com",
  databaseURL: "https://project-management-tool-17162.firebaseio.com",
  projectId: "project-management-tool-17162",
  storageBucket: "project-management-tool-17162.appspot.com",
  messagingSenderId: "381041461627"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
