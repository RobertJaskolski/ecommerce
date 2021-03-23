import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const GoogleProvider = new firebase.auth.GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });
export const singInWithGoogle = () => auth.signInWithPopup(GoogleProvider);

export const handleUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const { uid } = userAuth;
  const userRef = firestore.doc(`users/${uid}`);

  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: timestamp,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};
