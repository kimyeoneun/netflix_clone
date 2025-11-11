import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyA6haSiviNf2bzC6x1dQyoCPcVCdsHmjQ0",
  authDomain: "netflix-clone-a6cd4.firebaseapp.com",
  projectId: "netflix-clone-a6cd4",
  storageBucket: "netflix-clone-a6cd4.firebasestorage.app",
  messagingSenderId: "197404289372",
  appId: "1:197404289372:web:eb67b4e83ff2afbc2b7999"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async(name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(" ")));
    }
}

const login = async(email, password) => {
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/'[1].split('-').join(" ")));
    }
}

const logout = () => {
    signOut(auth);
}

export {auth, db, login, signup, logout};