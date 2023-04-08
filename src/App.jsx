import './assets/sass/main.scss'
import Header from "./containers/Header/Header"
import Skills from "./containers/Skills/Skills"
import Profile from "./containers/Profile/Profile"
import Certificates from "./containers/Certificates/Certificates"
import Projects from "./containers/Projects/Projects"
import Projectsfilter from "./containers/Projectsfilter/Projectsfilter"
import logo from '../src/assets/img/logo.png'

function App() {

  return (
    <div className="App">
      <h1 className="logo-name">Nyxy Portfolio</h1>
      <img className="logo" src={logo} alt="logo" />
        <Header />
        <div className="content">
          <Profile />
          <Skills />
          <Certificates />
          <Projects />
          <Projectsfilter />
        </div>
    </div>
  )
}

export default App
