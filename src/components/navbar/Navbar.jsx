import {useState} from "react"
import { Link } from "react-router-dom"
import NavbarList from "./NavbarList"
import './navbar.css'

function Navbar () {
  document.addEventListener("scroll", onScrollHandler)
  function onScrollHandler() {
    const header = document.getElementsByClassName("header-container")[0]
    if (window.pageYOffset > header.offsetTop) {
      header.classList.add("sticky")
    } else {
      header.classList.remove("sticky")
    }
  }
  return (
    <>
      <div className="header-container">
        <div className="header-parent" >
          <div className="top-menu">
            <TopLinkComponent className="inside-top-menu"></TopLinkComponent>
          </div>
          <nav className="nav-menu">
            <div className="nav-logo">
              <Link to="/"><span></span></Link>
            </div>
            <NavListContainer/>
            <ButtonContainer/>
          </nav>
        </div>
      </div>
    
    </>
  )
}

function TopLinkComponent({className}){
  return (
    <ul className={`top-list ${className}`}>
      <TopLink path="/promotion">Promotion</TopLink>
      <TopLink path="/financialsimulation">Financial Simulation</TopLink>
      <TopLink path="/location">Location</TopLink>
      <TopLink path="/help">Help</TopLink>
      <TopLink path="/search">Search</TopLink>
      <TopLink path="/ppid">PPID</TopLink>
      <TopLink path="/languages">Languages</TopLink>
    </ul>
  )
}

function TopLink({path, children}) {
  return (
    <li>
      <Link className="top-item" to={path}>{children}</Link>          
    </li>
  ) 
}


function NavListContainer() {
  return (
    <div className={`nav-list-container`}>
      <HamburgMenu className="inside-nav-list-cont"></HamburgMenu>
      <NavbarList></NavbarList>
      <TopLinkComponent className="inside-nav-list-cont"></TopLinkComponent>
    </div>
  )
}

function ButtonContainer() {
  return (        
    <div className="nav-button-container">
      <LoginButton/>
      <div className={`hamburg-menu inside-nav-list-cont hidden-button`}></div>
      <HamburgMenu className="inside-button-component"></HamburgMenu> 
      
    </div>
  )
}


function HamburgMenu({className}) {
  document.body.addEventListener("click", e => {
    if (e.target.classList.contains("hamburg-menu") && 
    e.target.classList.contains("inside-button-component")) {
      document.querySelector(".nav-list-container")
        .classList.add("active")
      return
    } else if (e.target.classList.contains("hamburg-menu") && 
    e.target.classList.contains("inside-nav-list-cont")) {
      document.querySelector(".nav-list-container")
        .classList.remove("active")
    }
  })
  return (
    <>
    <div className={`hamburg-menu ${className}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </>
  )
}
function LoginButton() {
  const [status, setStatus] = useState(false)
  const loginClickHandler = () => {
    setStatus(prev => !prev)
  }
  return (
    <div className="login-container">
      <button type="button" className={status?"active":""} onClick={loginClickHandler}>
        <span className="login-text">Login</span>
        <span className="login-arrow"></span>
      </button>
      <div className="login-options">
        <ul>
          <li><a href="/login"><i className="fa-solid fa-user"></i> Internet Banking Personal</a></li>
          <li><a href="/login"><i className="fa-solid fa-briefcase"></i>Internet Banking Business</a></li>
          <li><a href="/login"><i className="fa-sharp fa-solid fa-building"></i>Internet Banking Corporate</a></li>
        </ul>
      </div>
    </div>
  )
}


export default Navbar;