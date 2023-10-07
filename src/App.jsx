import { Outlet, useLoaderData } from "react-router-dom"
import HeaderNav from "./Components/HeaderNav"
import Myfooter from "./Components/Myfooter"


function App() {
  const evenData = useLoaderData()

  return (
    <div className='font-openSans relative'>
      <HeaderNav/>
      <Outlet context={evenData}/>
      <Myfooter/>
    </div>
  )
}

export default App
