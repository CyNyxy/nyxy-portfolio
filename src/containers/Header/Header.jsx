import Unikorb from '../../assets/img/unikorb.png'
import hero from '../../assets/img/hero.png'
import pc from '../../assets/img/mousepc.png'

function Header () {

  return (
    <>
    <header>
      <div className="header-col1">
        <div className="orbscreen">
          <img src={Unikorb} alt="unikorb" />    
          <div className="header-screen">
            <div className="header-screen-top">
              <div className="circle red"></div>
              <div className="circle yellow"></div>
              <div className="circle green"></div>
            </div>
            <p>&rsaquo;&rsaquo;&nbsp;Hello. I'm Nyxy</p>
            <p>My mission here is:<br/>
            &rsaquo; design outstanding websites<br/>
            &rsaquo; bring them to life<br/>
            &rsaquo; make sure they reach the moon! &emsp; &#128640;&#127769;</p>
          </div>
          <div className="mouse">
          <img src={pc} alt="pc" />
          </div>
        </div>
      </div>
      <div className="header-col2">
        <img src={hero} alt="hero banner" />
      </div>
    </header>
    </>
  )
}

export default Header