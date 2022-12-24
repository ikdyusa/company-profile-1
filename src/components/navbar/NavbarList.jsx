import {Link, NavLink} from "react-router-dom"
import {useState, createContext, useContext, useEffect} from "react"
import {
    individualMenu, 
    msmeMenu, 
    corporateMenu, 
    wealthmanagementMenu, 
    investorMenu, 
    digitalbankingMenu, 
    aboutbankMenu} 
    from "./navbarHoverText"

const menu = {
    individualMenu, 
    msmeMenu, 
    corporateMenu, 
    wealthmanagementMenu, 
    investorMenu, 
    digitalbankingMenu, 
    aboutbankMenu}

const ElementsLength = createContext(null)

function NavbarList() {
    const [elementsLength, setElement] = useState({elementObj: "", elementsLength: 0})
    return (
        <ElementsLength.Provider value={{elementsLength, setElement}}>
            <ul className={`nav-list`}>
                <NavbarLink path="/individual" hoverList={menu.individualMenu}>Individual</NavbarLink>
                <NavbarLink path="/msme" hoverList={menu.msmeMenu}>MSME</NavbarLink>
                <NavbarLink path="/corporate" hoverList={menu.corporateMenu}>Corporate</NavbarLink>
                <NavbarLink path="/wealthmanagement" hoverList={menu.wealthmanagementMenu}>Wealth Management</NavbarLink>
                <NavbarLink path="/investor" hoverList={menu.investorMenu}>Investor</NavbarLink>
                <NavbarLink path="/digitalbanking" hoverList={menu.digitalbankingMenu}>Digital Banking</NavbarLink>
                <NavbarLink path="/aboutbank" hoverList={menu.aboutbankMenu}>About Bank</NavbarLink>
                <UnderlineEffect></UnderlineEffect>
            </ul>
        </ElementsLength.Provider>
    )
}

function NavbarLink({path, children, hoverList}) {
    const [displayHover, setDisplayHover] = useState(false)
    const [displayHoverItem, setDisplayHoverItem] = useState(false)
    const {setElement} = useContext(ElementsLength)

    const mouseEnterHandler = (e) => {
        setElement({elementObj:e.target.getAttribute("href"), elementsLength:hoverList.length})
        if (window.innerWidth <= 1024) {
            return 
        }
        return setDisplayHover(true)
    }
    

    const mouseLeaveHandler = () => {
        if (window.innerWidth <= 1024) {
            return 
        }
        return setDisplayHover(false)
    }

    const clickHandler = (e) => {
        if (window.innerWidth >= 1024) return
        if (e.target.getAttribute("data-status") === "outer") {
            setDisplayHoverItem(prev => !prev)
        } 
    }

    if (displayHoverItem === true) {
        document.querySelectorAll(".nav-list-container ul").forEach(x => {
            x.classList.add("hide")
        })
    } else {
        document.querySelectorAll(".nav-list-container ul").forEach(x => {
            x.classList.remove("hide")
        })
    }



    return (
        <li>
            <NavLink className="nav-item" 
                to={path} 
                onMouseEnter={mouseEnterHandler} 
                onMouseLeave={mouseLeaveHandler}
                style={({isActive}) => {
                    return isActive? {backgroundColor: "salmon"}: {}
                }}
                >
                    {children}
            </NavLink>
            <p className="nav-item-tab-mobile"
                onClick={clickHandler}
                data-status="outer"
                >
                    {children}
            </p>
            <HoverList hoverList={hoverList} 
                path={path}
                displayHover={displayHover} 
                displayHoverItem={displayHoverItem}
                clickHandler={clickHandler}
                >
                    {children}
            </HoverList>
            <div className={`underline-effect-tab`}></div>
            <div className={hoverList.length !== 0?"triangle-effect-tab":""}></div>
        </li>

    )
}


function HoverList({hoverList, path, children, displayHover, displayHoverItem, clickHandler}) {
    return (
        <div className={`hover-menu-container 
            ${displayHover && hoverList.length !== 0?"hover-menu-container-active":""} 
            ${displayHoverItem?"active":""}`}>
            <div className="hover-menu-parent">
                <button className="backward-arrow" data-status="outer" onClick={clickHandler}>
                    <span className="backward-arrow-symbol">&#10096;</span>
                    <span className="backward-arrow-text">Back</span>
                </button>
                <h2 className="hover-menu-h2"><Link to={path}>{children}</Link></h2>
                <div className={`hover-menu`}>
                    {hoverList.map((x, y) => {
                        return (                            
                        <div className="hover-item" key={y}>
                            <h3 className="hover-item-h3" data-display="hide" onClick={(e) => {
                                const target = e.target
                                if (target.getAttribute("data-display") === "hide") {
                                    target.classList.add("active")
                                    target.setAttribute("data-display", "show")
                                } else {
                                    target.classList.remove("active")
                                    target.setAttribute("data-display", "hide")
                                }
                            }}>
                                <a href={x.linkHeader}>{x.titleHeader}</a>
                                <span className="dropdown-arrow" 
                                    style={{display:`${(x.list.length === 0)?"none":""}`}}
                                    >
                                </span>
                            </h3>
                            <ul className={`hover-list`}>
                                {x.list.map((a,b) => {
                                    return <li key={b}><a href={a.link}>{a.title}</a></li>
                                })}
                            </ul>
                        </div>
                        )
                    })}  
                </div> 
            </div>
        </div>
    )
}


function UnderlineEffect() {
    const [underlinePos, setUnderlinePos] = useState({width: "0", left: "0"})
    const {elementsLength} = useContext(ElementsLength)
    useEffect(() => {
        switch(elementsLength.elementObj) {
            case "/individual":
                setUnderlinePos({width: "90px", left: "9.5px"})
                break;
            case "/msme":
                setUnderlinePos({width: "50px", left: "121.5px"})
                break;
            case "/corporate":
                setUnderlinePos({width: "95px", left: "192.5px"})
                break;
            case "/wealthmanagement":
                setUnderlinePos({width: "180px", left: "304px"})
                break;
            case "/investor":
                setUnderlinePos({width: "80px", left: "500px"})
                break;
            case "/digitalbanking":
                setUnderlinePos({width: "137px", left: "597px"})
                break;
            case "/aboutbank":
                setUnderlinePos({width: "103px", left: "752px"})
                break;
            default:
                setUnderlinePos(prev => prev)
                break;
        }
    }, [elementsLength])
    
    return(
        
        <>
            <div className="underline-effect" style={underlinePos}></div>
            <div className="triangle-effect" 
                style={elementsLength.elementsLength !== 0? 
                    underlinePos:   
                    {...underlinePos, opacity:"0"}}
            >
            </div>
        </>
    )
}


export default NavbarList;