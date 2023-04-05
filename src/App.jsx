import './assets/sass/main.scss'
import Header from "./containers/Header/Header"
import Skills from "./containers/Skills/Skills"
import Profile from "./containers/Profile/Profile"
import logo from '../src/assets/img/logo.png'

function App() {

  return (
    <div className="App">
      <h1 className="logo-name">Nyxy Portfolio</h1>
      <img src={logo} alt="logo" />
        <Header />
        <Profile />
        <Skills />
    </div>
  )
}

export default App
