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

  export const createUserProfileDocument = async(userAuth, data) =>  {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot= await userRef.get(); 
    
    if(!snapShot.exists){
      const { displayName , email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...data
        });
      }catch(error){
        console.log('error creating user' , error.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config)


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'})
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;