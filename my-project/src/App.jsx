
import './App.css'
import {Routes,Route} from "react-router-dom"
import Room from './components/Room'
import Landing from './components/Landing'

function App() {

  return (
    <>
            <Routes>
          
            <Route path="/" element={<Landing/>}/>
            <Route path="/room/:roomId" element={<Room/>}/>
              
            </Routes>
    </>
  )
}

export default App
