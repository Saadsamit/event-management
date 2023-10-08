import { Outlet, useLoaderData } from "react-router-dom"
import HeaderNav from "./Components/HeaderNav"
import Myfooter from "./Components/Myfooter"
import { Toaster } from 'react-hot-toast';

function App() {
  const evenData = useLoaderData()

  return (
    <div className='font-openSans relative'>
      <Toaster/>
      <HeaderNav/>
      <Outlet context={evenData}/>
      <Myfooter/>
    </div>
  )
}

export default App
