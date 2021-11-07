import { useEffect, useState } from "react";
import initializeFirebase from "../pages/login/firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


//initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");

    const auth = getAuth();

    const registerUser = (email, password) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           setAuthError('');
          })
          .catch((error) => {
            setAuthError(error.message);
           
        })
        .finally(()=> setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/' ;
            history.replace(destination); 
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(()=> setIsLoading(false));
    }


    // Observer
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              setUser(user);
            } else {
              // User is signed out
              setUser({})
            }
            setIsLoading(false);
          });
        return () => unsubscribe;
    },[])

    const logout = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{
            //sign-out successful.
        })
        .catch((error) =>{
            // an error happened.
        })
        .finally(()=> setIsLoading(false));
    }
    return{
        user,
        isLoading,
        registerUser,
        loginUser,
        authError,
        logout,
    }
} 

export default useFirebase;