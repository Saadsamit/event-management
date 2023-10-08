import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import auth from "./firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const context = createContext(null);
export const Mycontext = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null);
  const LogIn = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const registrar = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const SignUpWithGoogle = () => {
    setIsLoading(true)
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider)
  };
  const logOut = () => {
    setIsLoading(true)
    signOut(auth);
  };
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setIsLoading(false)
      setUser(currentUser);
    });
  }, []);
  const contextData = {
    SignUpWithGoogle,
    user,
    logOut,
    registrar,
    LogIn,
    isLoading
  };
  return <context.Provider value={contextData}>{children}</context.Provider>;
};

Mycontext.propTypes = {
  children: PropTypes.node.isRequired,
};
