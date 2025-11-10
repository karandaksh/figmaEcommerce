


import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'


function App() {


  const router = createBrowserRouter(createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />

    </>
  ))



  return (

    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  )
}

export default App
