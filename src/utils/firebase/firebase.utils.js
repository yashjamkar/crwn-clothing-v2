import { initializeApp } from 'firebase/app';

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz3X8P9C_AYr_XZbwTTpiFfKdf7bxTVz4",
  authDomain: "crwn-clothing-db-962a8.firebaseapp.com",
  projectId: "crwn-clothing-db-962a8",
  storageBucket: "crwn-clothing-db-962a8.appspot.com",
  messagingSenderId: "9025861178",
  appId: "1:9025861178:web:332603852e0febb0676703"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {displayName: 'mike'}
  ) => {
  if(!userAuth) {
    return;
  }
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  try {
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error.message);
      }
    }
    return userDocRef;
  } catch (error) {
    console.log(error);
  }

};

export const createAuthUserWithEmailAndPassword = async (email , password) => {
  if(!email || !password ) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}