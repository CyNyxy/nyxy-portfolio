import avatar from '../../assets/img/avatar.png'

function Profile () {
  return (
    <section>
      <div className="box">
        <div className="profile">
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
          <p className="name">Cy-Nyxy</p>
        </div>
      </div>
    </section>
  )
}

export default Profile