import "./intro.scss"
// import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

  // const textRef = useRef();

  // useEffect(() => {
  //   console.log(textRef);
  //   init(textRef.current, { 
  //     showCursor: false, 
  //     strings: [] })
  // }, [])

  return (
    <div className="intro" id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/man.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hola, aing teh</h2>
            <h1>Komang Doni Kusuma</h1>
            <h3>Mahasiswa <span>PTI</span> Undiksha</h3>
          </div>
          <a href="#works">
            <img src="assets/down.png " alt="" />
          </a>
        </div>
    </div>
  )
}
