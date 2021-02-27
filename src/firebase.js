import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAy78HgQMNKV-0dnop4j4GR3yUwwNWGL_4",
    authDomain: "instagram-clone-c7571.firebaseapp.com",
    projectId: "instagram-clone-c7571",
    storageBucket: "instagram-clone-c7571.appspot.com",
    messagingSenderId: "290103416691",
    appId: "1:290103416691:web:c8d94c0e352c111ad01706",
    measurementId: "G-0R8SJ4ZSMX"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth, storage };