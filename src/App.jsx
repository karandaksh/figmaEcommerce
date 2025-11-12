import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router'



import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Layout from './components/Layout.jsx'
import Signup from './pages/Signup.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'


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
