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
      <div className="title">
        <h1 className="logo-name">Nyxy Portfolio</h1>
        <img className="logo" src={logo} alt="logo" />
      </div>
        <Header />
        <div className="content">
          <div className="profile-area">
            <Profile /> 
          </div>
          <div className="cert-area">
            <Certificates />
          </div>
          <div className="skills-area">
            <Skills />
          </div>
          <div className="projects-area">
            <Projects />
            <Projectsfilter />
          </div>
          
        </div>
    </div>
  )
}

export default App
