import { Outlet } from "react-router-dom"
import HeaderNav from "./Components/HeaderNav"
import Myfooter from "./Components/Myfooter"


function App() {

  return (
    <div className='font-openSans relative'>
      <HeaderNav/>
      <Outlet/>
      <Myfooter/>
    </div>
  )
}

export default App
