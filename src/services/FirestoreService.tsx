import firebase from 'firebase/app';
import 'firebase/firestore';
import {creds} from './FirebaseCredentials'

var firebaseConfig = creds

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();