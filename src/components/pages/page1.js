import '../../styles/Branding.css'
import '../../styles/page1.css'

export default function page1() {
    return (
        <div className="phan1">
        <h1 id="slogan">SLOGAN</h1>
        <img id="myPhoto" src={require("../../assets/myPhoto.jpg")} />
      </div>
    );
  }