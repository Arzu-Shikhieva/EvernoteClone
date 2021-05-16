import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
let firebaseConfig = {
    apiKey: "AIzaSyDntVxP3vFLHNR_fVf9AtQu9zrRhuloUNU",
    authDomain: "evernote-clone-27a3b.firebaseapp.com",
    projectId: "evernote-clone-27a3b",
    storageBucket: "evernote-clone-27a3b.appspot.com",
    messagingSenderId: "463908457129",
    appId: "1:463908457129:web:47154bf4df0e3d8abe77b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;