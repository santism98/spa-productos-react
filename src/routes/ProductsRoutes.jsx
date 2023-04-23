import { Routes, Route } from 'react-router-dom'
import { HomePage, SearchPage } from '../pages'
import { TopsPage, SmartphonesPage, ProductsPage, SunglassesPage, DetailViewPage } from '../products/pages'
import {NavBar} from '../components'


export const ProductsRoutes = () => {

  return (

    <>
   
   <NavBar />

      <main>

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/smartphones' element={<SmartphonesPage />} />
          <Route path='/sunglasses' element={<SunglassesPage />} />
          <Route path='/tops' element={<TopsPage />} />
          <Route path='/detail-view/:id' element={<DetailViewPage />} />

        </Routes>

      </main>


    </>

  )
}
