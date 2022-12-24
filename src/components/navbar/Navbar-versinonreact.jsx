import {useState} from 'react';

function Navbar () {
    let [menu, setMenu] = useState("hide-menu")

    function checkboxHandler(e) {
      e.target.checked? setMenu("show-menu"): setMenu("hide-menu");
    }    
  
    return <>
    <header>
        <div>
          <ul className={menu}>
          <li className="other-menu"><span>Other Menu</span></li>
          <li><a>Promotion</a></li>
          <li><a>Financial Simulation</a></li>
          <li><a>Location</a></li>
          <li><a>Help</a></li>
          <li><a>PPID</a></li>
          <li><span>|</span><a>Language</a></li>
          </ul>
        </div>
        <nav>
          <div><a href='/'><img src="./public/assets/bri-logo.png"/></a></div>
          <ul className={menu}>
            <li><span><a href='/individual'>Individual</a></span></li>
            <li><span><a href='/msme'>MSME</a></span></li>
            <li><span><a href='/corporate'>Corporate</a></span></li>
            <li><a>Wealth Management</a><span></span></li>
            <li>Investor<span></span></li>
            <li>Digital Banking<span></span></li>
            <li>About BRI<span></span></li>
          </ul>
          <div className="button-container">
            <button type="button"><span>Login</span> V</button>
            <div className="hamburger-menu">
              <input className="checkbox-button" type="checkbox" onChange={checkboxHandler}/>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          
        </nav>
    </header>
    </>
}

export default Navbar;