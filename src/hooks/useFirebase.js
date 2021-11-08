import { useEffect, useState } from "react";
import initializeFirebase from "../pages/login/firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged, getIdToken, signOut } from "firebase/auth";



//initialize firebase app
initializeFirebase();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
           setAuthError('');
           const newUser = {email, displayName: name};
           setUser(newUser);
           // save user to the database
           saveUser(email, name, 'POST');
           //send name to firebase after creation
           updateProfile(auth.currentUser, {
                displayName: name
                }).then(() => {
                }).catch((error) => {
            });
           history.replace('/');
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

    const signInWithGoogle = (location, history) =>{
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            const destination = location?.state?.from || '/' ;
            history.replace(destination); 
        }).catch((error) => {
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
              getIdToken(user)
              .then(idToken =>{
                  setToken(idToken);
              })
            } else {
              // User is signed out
              setUser({})
            }
            setIsLoading(false);
          });
        return () => unsubscribe;
    },[auth])

    // admin role 
    useEffect(()=>{
        fetch(`https://intense-gorge-28690.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

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

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName };
        fetch('https://intense-gorge-28690.herokuapp.com/users', {
            method:method,
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    return{
        user,
        admin,
        token,
        signInWithGoogle,
        isLoading,
        registerUser,
        loginUser,
        authError,
        logout,
    }
} 

export default useFirebase;