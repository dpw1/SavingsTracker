import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCO6aFGARzldgcwJpcmrjaDPWyzw34rO34",
  authDomain: "savings-tracker-246a6.firebaseapp.com",
  databaseURL: "https://savings-tracker-246a6.firebaseio.com",
  projectId: "savings-tracker-246a6",
  storageBucket: "savings-tracker-246a6.appspot.com",
  messagingSenderId: "328212335487"
};

firebase.initializeApp(config);

const database = firebase.database();

export { database as default, firebase };
