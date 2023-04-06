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
          <p>nyxy@email.com</p>
          <p>Linkedin</p>
          <p>Self-motivated developer, who is willing to learn and create outstanding UI applications.</p>
        </div>
      </div>
    </section>
  )
}

export default Profile