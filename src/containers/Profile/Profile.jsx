import avatar from '../../assets/img/avatar.png'

function Profile () {
  return (
    <section>
      <div className="box round">
        <div className="profile">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="name">Cy-Nyxy</p>
          <p className="subtitle">Front-end Developer</p>
          <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
          <div className="contact">
            <div>
              <i className="fab fa-github"></i><p><a href="https://github.com/CyNyxy">Github</a></p>
            </div>
            <div>
              <i className="fab fa-linkedin"></i><p><a href="https://www.linkedin.com/in/carol-nyxy/">Linkedin</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile