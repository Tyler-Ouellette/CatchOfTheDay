import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAOUK9aSLYHxldRDQtGnF_T8iRLJDMYriY',
    authDomain: 'catchoftheday-40c6a.firebaseapp.com',
    databaseURL: 'https://catchoftheday-40c6a.firebaseio.com',
    projectId: 'catchoftheday-40c6a',
    storageBucket: 'catchoftheday-40c6a.appspot.com',
    messagingSenderId: '905552975284',
    appId: '1:905552975284:web:ad8066a6a2d6982d254ee1',
    measurementId: 'G-VM3Z66RFZG',
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
