import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD_154MWzHmwl-KYbVH2b7t7LYd70ktZFA",
    authDomain: "tenedores-3fa91.firebaseapp.com",
    projectId: "tenedores-3fa91",
    storageBucket: "tenedores-3fa91.appspot.com",
    messagingSenderId: "320356762877",
    appId: "1:320356762877:web:395f024e640b8d9d57aa94"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);