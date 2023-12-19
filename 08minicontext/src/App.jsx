
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile' 
import Usercontextprovider from './Context/Usercontextprovider'
function App() {
  

  return (
    <Usercontextprovider>
        <h1>React With chai</h1>
        <Login/>
        <Profile/>

    </Usercontextprovider>
  )
}

export default App
