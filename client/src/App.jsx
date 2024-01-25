import React from 'react'
import { BrowserRouter} from 'react-router-dom'
import { LoginPage, SignUpPage } from './Route'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/login" element={<LoginPage/> }/>
    <Route path="/sign-up" element={<SignUpPage/> }/>
   </Routes>
   </BrowserRouter>
  )
}

export default App