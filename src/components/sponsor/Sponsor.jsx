import './sponsor.css'
import { useState, useEffect } from 'react'

function Sponsor() {
    const [displaySequence, setDisplaySequence] = useState(1)
    const [imagesCount, setImagesCount] = useState (10)
    const [right, setRight] = useState(null)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [mouseEnter, setMouseEnter] = useState(false)
    const clickRightHandler = () => {
        setRight(true)
        setDisplaySequence( prev => {
        if (prev === imagesCount-5) 
            return prev
        return prev + 1})
    }

    const clickLeftHandler = () => {
        setRight(false)
        setDisplaySequence( prev => {
        if (prev === 0) 
            return prev
        return prev - 1})}

    //code for smoothing the slide transition while transitioning from clone to original element
    const transitionOption = right? 
        (displaySequence === 1)? 'none': 'all 0.5s ease-in-out'
        : (displaySequence === imagesCount-6)? 'none': 'all 0.5s ease-in-out'

    //syntax for infinity slide rotation


    useEffect(() => {
      const childNodes = document.getElementsByClassName("sponsor-container-images")[0].childNodes.length
      setImagesCount(childNodes)
    }, [])

    //increase opacity for current active class
    //and infinite slide activation
    useEffect(() => {
        let intervalLeft
        let intervalRight
        document.querySelectorAll(".sponsor-images")
            .forEach((x, y) => {
                x.classList.remove("active-image")
            })
        document.getElementsByClassName("sponsor-images")[displaySequence + 2]
            .classList.add("active-image")
        if (displaySequence === 0 && right === false) {
            const intervalFuncLeft = () => intervalLeft = setInterval(() => setDisplaySequence(imagesCount - 6), 501)
            intervalFuncLeft()
            return () => clearInterval(intervalLeft)
        }
        if (displaySequence === imagesCount-5 && right === true) {
            const intervalFuncRight = () => intervalRight = setInterval(() => setDisplaySequence(1), 501)
            intervalFuncRight()
            return () => clearInterval(intervalRight)
        }
    }, [displaySequence, right, imagesCount])

    //syntax for start automating the slides and stop it

    useEffect(() => {
        let intervalAutomatic
        const intervalAutoFunc = () =>{ 
            intervalAutomatic = setInterval(() => {
            setRight(true)
            setDisplaySequence( prev => {
            if (prev === imagesCount-5) 
                return prev
            return prev + 1})
        }, 2000)}
        intervalAutoFunc()

        if (mouseEnter) clearInterval(intervalAutomatic)        
        return () => clearInterval(intervalAutomatic)
    }, [imagesCount, mouseEnter])


    //keep the carousell centered
    useEffect(() => setWindowWidth(window.innerWidth), [window.innerWidth])
    return (
        <div className="sponsor">
            <h1 className='reveal'>Subsidiaries</h1>
            <div className="sponsor-container reveal" 
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}>
                <div className='sponsor-container-btn'>
                    <button className="sponsor-btn" type="button" onClick={clickLeftHandler}>❮</button>
                    <button className="sponsor-btn" type='button' onClick={clickRightHandler}>❯</button>
                </div>
                <ul className="sponsor-container-images"  
                    style={{
                        transform: `translate3d(${-270*displaySequence}px, 0px, 0px)`, 
                        transition: transitionOption,
                        left: `${(windowWidth-window.screen.width)/2}px`
                        }}
                    >
                    <img className="sponsor-images cloned" src="/public/assets/homepageassets/New folder/working.jpg" alt="" />
                    <img className="sponsor-images cloned" src="/public/assets/features/leone-venter-VieM9BdZKFo-unsplash.jpg" alt="" />
                    <img className="sponsor-images cloned" src="/public/assets/homepageassets/mirrored-building.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/river.jpg" alt=""/>
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/coins.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/crypto-trade.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/money-tree.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/micheile-dot-com-ZVprbBmT8QA-unsplash (1).jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/money.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/reiter.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/New folder/working.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/features/leone-venter-VieM9BdZKFo-unsplash.jpg" alt="" />
                    <img className="sponsor-images" src="/public/assets/homepageassets/mirrored-building.jpg" alt=""/>
                    <img className="sponsor-images cloned" src="/public/assets/homepageassets/New folder/river.jpg" alt="" />
                    <img className="sponsor-images cloned" src="/public/assets/homepageassets/New folder/coins.jpg" alt="" />
                    <img className="sponsor-images cloned" src="/public/assets/homepageassets/New folder/crypto-trade.jpg" alt="" />
                </ul>
            </div>
        </div>
    )
}

export default Sponsor