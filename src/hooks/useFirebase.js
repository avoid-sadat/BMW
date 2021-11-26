import React, { useEffect, useState } from 'react';
import initializeFirebase from '../Pages/Login/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,GoogleAuthProvider, signInWithPopup,updateProfile,signOut } from "firebase/auth";
initializeFirebase();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
            const auth = getAuth();
            const googleProvider = new GoogleAuthProvider();

            const registerUser=(email,password,name,history)=>{
               setIsLoading(true) 
                createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setAuthError('');
                    const newUser ={email,displayName:name};
                    setUser(newUser);
                   
                    saveUser(email, name, 'POST');
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                    }).catch((error) => {
                    });
                    history.replace('/');
                  // Signed in 
                //   const user = userCredential.user;
                  
                  // ...
                })
                .catch((error) => {
                    setAuthError(error.message);
                    console.log(error);
                  // ..
                })
                .finally(() => setIsLoading(false));
            }

            //Login module
            const loginUser =(email,password,location,history)=>{
                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const destination = location?.state?.from || '/';
                    history.replace(destination);
                    setAuthError('');
                    // const user = userCredential.user;
                    
                    // ...
                })
                .catch((error) => {
                    setAuthError(error.message);
                    console.log(error);
                    // ..
        })
        .finally(() => setIsLoading(false));
            }

            //sign in with google
            const signInWithGoogle=(location,history)=>{
                setIsLoading(true) 
                signInWithPopup(auth, googleProvider)
                    .then((result) => {
                        const user = result.user;
                        saveUser(user.email, user.displayName, 'PUT');
                        setAuthError('');
                        const destination = location?.state?.from || '/';
                        history.replace(destination);
                    }).catch((error) => {
                        setAuthError(error.message);              
                 })
                 .finally(() => setIsLoading(false));

            }


            //observer
            useEffect(()=>{
                const unsubscribed = onAuthStateChanged(auth,(user)=>{
                    if(user){
                        setUser(user);
                    }
                    else{
                        setUser({})
                    }
                    setIsLoading(false);
                });
                return ()=>unsubscribed
            },[])

            useEffect(() => {
                fetch(`https://young-chamber-31709.herokuapp.com/users/${user.email}`)
                    .then(res => res.json())
                    .then(data => setAdmin(data.admin))
            }, [user.email])
            

            const logout = () => {
                setIsLoading(true);
                signOut(auth).then(() => {
                    // Sign-out successful.
                }).catch((error) => {
                    // An error happened.
                })
                    .finally(() => setIsLoading(false));
            }
          
            const saveUser = (email, displayName, method) => {
                const user = { email, displayName };
                fetch('https://young-chamber-31709.herokuapp.com/users', {
                    method: method,
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then()
            }
        
              
    return {
        user,
        registerUser,
        admin,
        loginUser,
        isLoading,
        authError,
        signInWithGoogle,
        logout
       
    }
};

export default useFirebase;