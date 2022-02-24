import React, { useEffect } from "react"
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import PrivateRoute from './Components/PrivateRoute';
import UserLogin from './Components/UserLogin';
import UserRegister from './Components/UserRegister';
import UserProfile from './Components/UserProfile'
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "./JS/actions/userAction";

function App() {

  const isAuth = useSelector(state => state.userReducer.isAuth)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProfile())
  }, [isAuth])


  return (
    <div className="App">
      <NavBar />

      <div className="auth-wrapper">
        <Routes>
          <Route path="/register" element={<UserRegister />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path='/profile' element={<PrivateRoute component={UserProfile} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
