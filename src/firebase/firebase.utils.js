import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyDpQVQ0QzH2ZEakuxckBk5U7oyv-Zq7VC4',
	authDomain        : 'crwn-db-782e9.firebaseapp.com',
	projectId         : 'crwn-db-782e9',
	storageBucket     : 'crwn-db-782e9.appspot.com',
	messagingSenderId : '991485484296',
	appId             : '1:991485484296:web:d240c41f79ab5faf7be0bd',
	measurementId     : 'G-XK3PG1G7R6'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
