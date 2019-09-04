import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAv7x5WEK896uwzjNdbs92WnhNatsqGbro",
    authDomain: "predicto-b3f39.firebaseapp.com",
    databaseURL: "https://predicto-b3f39.firebaseio.com",
    projectId: "predicto-b3f39",
    storageBucket: "predicto-b3f39.appspot.com",
    messagingSenderId: "148676079611",
};

firebase.initializeApp(config);

export default firebase;
