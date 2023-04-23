import { Route, Routes } from 'react-router-dom'
import { ProductsRoutes } from './ProductsRoutes'
import { AuthRoutes } from './AuthRoutes'

export const AppRouter = () => {

    return (

        <>
            <Routes>

                <Route path='/auth/*' element={<AuthRoutes />} />
                <Route path='/*' element={<ProductsRoutes />} />

            </Routes>
        </>

    )
}

