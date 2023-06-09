import './assets/sass/main.scss'
import Header from "./containers/Header/Header"
import Skills from "./containers/Skills/Skills"
import Profile from "./containers/Profile/Profile"
import Certificates from "./containers/Certificates/Certificates"
import Projects from "./containers/Projects/Projects"
import Hobbies from "./containers/Hobbies/Hobbies"
import logo from '../src/assets/img/logo.png'

function App() {

  return (
    <div className="App">
      <nav>
        <div className="title">
          <h1 className="logo-name">Nyxy Portfolio</h1>
          <img className="logo" src={logo} alt="logo" />
        </div>
      </nav>

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
          <div className="hobbies-area">
            <Hobbies />
          </div>
          <div className="projects-area">
            <Projects />
          </div>
            <footer>
                <p>&#169; 2023 By&nbsp;<u><b><a href="https://github.com/CyNyxy">Nyxy</a></b></u></p>
            </footer>
        </div>
    </div>
  )
}

export default App
