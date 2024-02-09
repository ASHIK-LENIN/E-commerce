import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ActivationPage, LoginPage, SignUpPage } from './Route'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loadUser } from './redux/actions/user';
import  store  from './redux/store';
import HomePage from './Pages/HomePage';


const App = () => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route  path='/home' element={<HomePage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path='/activation/:activation_token' element={<ActivationPage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />
    </BrowserRouter>
  )
}

export default App