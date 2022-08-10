import { useEffect, useState } from "react"
import PortofolioList from "../portofolioList/PortofolioList"
import "./portofolio.scss"
import 
{
  featurePortofolio,
  webApp,
  mobileApp,
  design,content
} from "../../data"

export default function Portofolio() {

  const [selected, setSelected] = useState(0)
  const [img, setImg] = useState()

  const list = [
    {
        id:0,
        title:"Basis Data",
        img:"assets/basisdata.png"
    },
    {
        id:1,
        title:"Algoritma dan Pemrograman",
        img:"assets/algoritma.JPG"
    },
    {
        id:2,
        title:"Book Store sederhana",
        img:"assets/bookstore.jpg"
    },
    {
        id:3,
        title:"Login and Register",
        img:"assets/login.jpg"
    },
    {
        id:4,
        title:"Frontend facebook",
        img:"assets/facebook.jpg"
    },
]

  return (
    <div className="portofolio" id="portofolio">
        <h1>Project</h1>
        <ul>
          {list.map((item) => (
            <PortofolioList key={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id}/>
          ))}
        </ul>
        <div className="container" >          
            <div className="item">
              <img src={list[selected].img} alt="" />
            </div>
        </div>
    </div>
  )
}
