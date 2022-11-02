import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyDqz04QKrUyTFfdvCRaX0G6krR4OeKq01g",
    authDomain: "pokemon-wire.firebaseapp.com",
    projectId: "pokemon-wire",
    storageBucket: "pokemon-wire.appspot.com",
    messagingSenderId: "205897712102",
    appId: "1:205897712102:web:eeca2d39ed76458433d627"
  };

// init firebase
firebase.initializeApp(firebaseConfig)