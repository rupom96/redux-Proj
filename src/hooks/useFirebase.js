import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from 'axios';


import initializeAuthentication from "../Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {



    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);



    const auth = getAuth();





    /////////////////////////////////

    const registerUser = (email, password, history, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {



                setError('');

                //displayName gets missing without refreshing, this solves it
                const newUser = { email, displayName: name, role: 'Normal' };
                setUser(newUser);

                //save user to our database(mongo)
                saveUser(email, name);



                //updating/set name of user
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                alert('User created successfully!');

                //to ridirect at home
                // const redir_uri = '/home';

                //to ridirect at dashboard
                const redir_uri = '/dashboard';
                history.push(redir_uri);
                // window.location.reload();

            })
            .catch((error) => {
                // const errorCode = error.code;
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                // Signed in 

                // const user = userCredential.user;

                setError('');
                alert('User logged in successfully!');

                //to ridirect at home
                // const redir_uri = location.state?.from || '/home';

                //to ridirect at dashboard
                const redir_uri = location.state?.from || '/dashboard';
                history.replace(redir_uri);
                window.location.reload();
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);

            });

    }




    // const signInUsingGoogle = () => {



    //     setLoading(true);

    //     const googleProvider = new GoogleAuthProvider();

    //     return signInWithPopup(auth, googleProvider)



    // }

    //user state observer
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setLoading(false);
        });
        return () => unsubscribed
    }, [auth])

    const logOut = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                //signout successfull
            })
            .catch((error) => {
                //an error happened
            })
            .finally(() => setLoading(false));
    }



    useEffect(() => {
        fetch(`https://immense-thicket-22974.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])

    //database backend caller for saving users in our personal database(mongo)

    const saveUser = (email, displayName) => {
        const user = { email: email, displayName: displayName, role: "Normal" };
        axios.post('https://immense-thicket-22974.herokuapp.com/users', user)
            .then(res => {
                // if (res.data.insertedId) {
                //     // alert('User added successfully');

                // }

            })

    }

    return {
        user,
        admin,
        loading,
        setLoading,
        setUser,
        logOut,
        loginUser,
        registerUser,
        error,
        setError
    }
}

export default useFirebase;