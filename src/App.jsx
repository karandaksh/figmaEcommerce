import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements, Navigate } from 'react-router'



import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Layout from './components/Layout.jsx'


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <>

      <Route path='' element={<Layout />} >
        <Route path='/' element={<Navigate to="/home" replace />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
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
