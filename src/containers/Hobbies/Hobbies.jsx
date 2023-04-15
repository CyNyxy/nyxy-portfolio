import gaming from '../../assets/img/cont.png'
import photography from '../../assets/img/cam.png'
import bike from '../../assets/img/cyc.png'

function Hobbies () {
  return (
    <section>
      <div className="box">
        <h2>Hobbies</h2>
        <div className="grid">
          <img className="hobbies-img" src={bike} alt="bike" />
          <img className="hobbies-img" src={gaming} alt="gaming" />
          <img className="hobbies-img" src={photography} alt="camera" />
        </div>

      </div>
    </section>
  )
}

export default Hobbies