import './fastmenu.css'
import { useState } from 'react'

const selectorList = [
    {
        title: "Open Saving",
        link: "/individual",
    },
    {
        title: "Open Deposit",
        link: "/",
    },
    {
        title: "Applying for a Mortgate",
        link: "/",
    },
    {
        title: "Find Out about BANKZZI Cards",
        link: "/",
    },
    {
        title: "Visit The Nearest BANK Branch",
        link: "/",
    }
]


const menuMenu = [
    {
        title: "Lihat Promo",
        link: "",
        icon: <i className='fa-solid fa-tags'></i>,
    },
    {
        title: "Career",
        link: "/",
        icon: <i className="fa-regular fa-handshake"></i>,
    },
    {
        title: "Bankmo Registration",
        link: "/",
        icon: <i className="fa-solid fa-gift"></i>
    },
    {
        title: "Auction Info",
        link: "/",
        icon: <i className="fa-solid fa-umbrella"></i>
    },
    {
        title: "GCG",
        link: "/",
        icon: <i className="fa-solid fa-comments"></i>
    },
    {
        title: "Covid-19 Info",
        link: "/",
        icon: <i className="fa-solid fa-virus-covid"></i>,
    }
]




function FastMenu() {
    return (
      <>
      <div className='fast-menu-container'>
        <UpperPart/>
        <LowerPart/>
      </div>
      </>
    )
  }


function UpperPart () {
    const [showLists, setShowList] = useState(false)
    const [selectedItem, setSelectedItem] = useState({innerHtml: "Choose one...", dataLink: ""})
    const [searchKeyword, setSearchKeyword] = useState("")
    const lists = selectorList
        .filter(i => {
            return i.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
        })
        .map((x,y) => {
            return <li key={y}>
                <input type='radio' 
                    name="fast-menu-list-item-radio-btn" 
                    id={"fast-menu-list-item-radio-btn"+y}
                    data-link={x.link}/>
                <label htmlFor={"fast-menu-list-item-radio-btn"+y} 
                    onClick={() => {
                        setSelectedItem({innerHtml:`${x.title}` , dataLink: `${x.link}`})
                        setShowList(false)
                        setSearchKeyword("")
                    }}
                    >
                    {x.title}
                </label>
            </li>
        }) 
    
    
    return (
        <div className={`fast-menu-upper-part ${showLists?"active":""}` }>
            <form action={selectedItem.dataLink} method="get">
                <div className='fast-menu-selected-item-container'>
                    <span>I want to:</span>
                    <span className='fast-menu-selected-item-name' 
                        onClick={()=> setShowList(prev=> !prev)}
                        >
                            {selectedItem.innerHtml}
                    </span>
                    <button className='fast-menu-selected-item-btn' type='submit'>Find</button>
                </div>
                <div className={`fast-menu-list-item-container`}>
                    <div className='fast-menu-list-item-search'>
                        <input type="text" 
                            placeholder='Search option' 
                            onChange={(e) => setSearchKeyword(e.target.value)}
                            value={searchKeyword}/>
                    </div>
                    <ul className='fast-menu-list-item-lists'>
                        {lists.length === 0?<p>-No data-</p>:lists}
                    </ul>
                </div>
            </form>
            
        </div>
    )
}

function LowerPart() {
    return (
        <div className='fast-menu-lower-part reveal'>
            <ul className='fast-menu-menu'>
                {menuMenu.map((x,y) => {
                    return <li key={y*100}>
                        <a href={x.link}>
                            <span>{x.icon}</span>
                            <span>{x.title}</span>
                        </a>
                    </li>
                })}
            </ul>
        </div>
    )
}


export default FastMenu;