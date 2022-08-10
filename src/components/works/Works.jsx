import "./works.scss"

export default function Works() {
  return (
    <div className="works" id="works">
        <div className="slider">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/mobile.png" alt="" />
                  </div>
                  <h2>Skilss & Expertise</h2>
                </div>
              </div>
              <div className="right">
                <ul>
                  <li>Menguasai Microsoft Office</li>
                  <li>Mengerti Sedikit javascript</li>
                  <li>Mengerti Sedikit ReactJs</li>
                  <li>Mengerti Sedikit NodeJs</li>
                </ul>
              </div>
            </div>
          <a href="#portofolio">
            <img src="assets/down.png " alt="" />
          </a>
          </div>
        </div>
    </div>
  )
}
