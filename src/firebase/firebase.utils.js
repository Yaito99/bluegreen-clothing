import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAMULAuobRGe9lKJLGru2ow9QTWOYpgfTw",
    authDomain: "e-bluegreen.firebaseapp.com",
    databaseURL: "https://e-bluegreen.firebaseio.com",
    projectId: "e-bluegreen",
    storageBucket: "e-bluegreen.appspot.com",
    messagingSenderId: "314071580132",
    appId: "1:314071580132:web:5a1c14ab43ce919d92dbf1"
  };



  firebase.initializeApp(config)


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;