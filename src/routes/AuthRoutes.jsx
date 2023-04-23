import {LoginPage, RegisterPage } from '../auth/pages/index'
import { Route, Routes } from 'react-router-dom'

export const AuthRoutes = () => {


  return (

   <>

 

    <main>

      <Routes>

        <Route path='/' element={<LoginPage />} />
        <Route path='register' element={<RegisterPage />} />

      </Routes>

    </main>
    
    
    </>
  )

}
