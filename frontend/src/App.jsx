import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router'



import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Layout from './components/Layout.jsx';
import Signup from './pages/Signup.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Favorites from './pages/Favorites.jsx';
import AddToCart from './pages/AddToCart.jsx';
import AllProducts from './pages/AllProducts.jsx';


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <>

      <Route path='' element={<Layout />} >
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/addtocart' element={<AddToCart />} />
        <Route path='/allproducts' element={<AllProducts />} />
      </Route>


    </>
  ))



  return (

    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  )
}

export default App

