import { Outlet } from "react-router-dom"
import InputBar from "./Components/FoodBarCode/InputBar/InputBar"
import NavBar from "./Components/NavBar/NavBar"


function App() {
 
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
