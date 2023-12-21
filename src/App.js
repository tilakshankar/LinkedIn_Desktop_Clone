// App.js

import React, { useEffect } from 'react';
import './css/App.css';
import { Provider, useDispatch } from 'react-redux'; // Import Provider
import {store} from './app/store';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {auth} from './firebase'
import Login from './Login';
import './features/userSlice';
import Widgets from "./Widgets";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }));
      }
      else {
        // user logged out
        dispatch(logout());
      }
    })
  }, [])

  return (
    <div className="App">
      {/* Header */}
      <Header />
      
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
         
          <Feed />
          <Widgets />
        </div>
      )}
      
  
    </div>
  );
}

// Wrap your App component with the Provider
const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
