import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase.config";
import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app)




const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // user create
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    // sign in
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google
    const googleLogin = new GoogleAuthProvider();


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser)
            console.log('user in the auth state change',currentUser);
           
            setLoading(false)
            // if user exists
            if(currentUser){
              
                axios.post('https://hotel-room-server.vercel.app/jwt',loggedUser,{withCredentials: true})
                .then(res=>{
                    console.log('token response here', res.data);
                })              
            }
            else{
axios.post('https://hotel-room-server.vercel.app/logout', loggedUser,{
    withCredentials: true
})
.then(res=>{
    console.log(res.data);
})
            }
        });
        return()=>{
            unSubscribe()
        }
    },[])


    const authInfo = {
        createUser, logOut, signIn,loading,user,googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;