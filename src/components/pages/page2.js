import '../../styles/Portfolio.css'
import '../../styles/page2.css'

export default function page2() {
    return (
        <div className="phan2" id="myBio">
          <div className="bio">
            <div className="avatar">
            <img id="myAvatar" src={require("../../assets/avatar1.jpg")} />
            </div>
            <div className="info">
              <p>Họ Tên</p>
              <p>Sinh Nhật</p>
              <p>Email/SĐT</p>
            </div>
          </div>
          <div className="experience">
            <p>Kinh Nghiem Lam Viec</p>
          </div>
        </div>
    );
  }