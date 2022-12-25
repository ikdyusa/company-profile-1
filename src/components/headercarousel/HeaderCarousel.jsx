import './headercarousel.css';
import { useState, useEffect } from 'react';

const images = [
    {
        alt: "money2-jpg",
        url: "./public/assets/homepageassets/New folder/working.jpg",
        other: {
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra eu purus vulputate volutpat. Donec.",
            link: "/"
        }
    },
    {
        alt: "coins-jpg",
        url: "./public/assets/homepageassets/New folder/crypto-trade.jpg",
        other: {
            desc: "Donec nec ex sodales, imperdiet dui pharetra, tempus orci. Sed in erat metus. Curabitur in.",
            link: "/"
        }
    },
    {
        alt: "money-jpg",
        url: "./public/assets/homepageassets/New folder/money-tree.jpg",
        other: {
            desc: "Aenean vitae risus quis ante tempus pulvinar ut at nibh. Nunc ac enim ac ligula.",
            link: "/"
        }
    },
]

function HeaderCarousel() {
    return (
        <>
        <div className="header-carousel-container">
            <CarouselImages></CarouselImages>
        </div>
        </>
    )
}

function CarouselImages() {
    const [slidesCount, setslidesCount] = useState(10)
    const [displaySlide, setDisplaySlide] = useState(0)
    const [pausedInterval, setPausedInterval] = useState(false)
    useEffect(()=> {
        const carouselImages = document.querySelector(".header-carousel-images>ul")
        setslidesCount(carouselImages.childNodes.length)
    })

    useEffect(()=> {
        document.querySelector(".header-carousel-images div").style.marginLeft = -100*displaySlide + "vw"
    },[displaySlide])

    return (
        <>
            <div className="header-carousel-images" 
                onMouseEnter={() => setPausedInterval(true)}
                onMouseLeave={() => setPausedInterval(false)}>
                <ul style={{width: (100*slidesCount) + "vw"}}>
                    {images.map((x,y) => {
                        return (
                            <div key={y*100} 
                                className={`${displaySlide===y?"active-slide":""} slide`}
                                style={{backgroundImage: `url("${x.url}")`}}
                                >
                                    <div className=''>
                                        <p>{x.other.desc}</p>
                                        <div role={"button"}><a href={x.other.link}>See More</a></div>
                                    </div>
                            </div>
                        )
                    })}
                </ul>
                <SlidesNavigationRadio 
                    slidesCount={slidesCount} 
                    setDisplaySlide={setDisplaySlide}
                    pausedInterval={pausedInterval}
                    displaySlide={displaySlide}
                    />           
            </div>
            
            
        </>
    )
}

function SlidesNavigationRadio({slidesCount, setDisplaySlide, pausedInterval, displaySlide}){
    const radioListLabel = []
    for (let i = 0; i < slidesCount; i++) {
        radioListLabel.push(<label className={`slides-btn-manual ${displaySlide === i?"active-slides-btn":""}`}
            key={(i)}
            data-sequence={i}
            onClick={() => {
                setDisplaySlide(i)
                clearInterval(interval)
            }}
            ></label>)
    } 
    let interval
    const intervalFunction = () => {
        interval = setInterval(() => {
            if (!pausedInterval) {
                setDisplaySlide(prev => {
                    if (prev === slidesCount-1){
                        return 0
                    }
                    return prev + 1
                })
            }
        }, 5000)
    }
    useEffect(() => {
        intervalFunction()
        return () => clearInterval(interval)
    }, [slidesCount, pausedInterval])
    return(
        <>
            <div className='navigation-manual'>
                {radioListLabel}
            </div>
            <SlidesNavigationButton
                setDisplaySlide={setDisplaySlide}
                slidesCount={slidesCount}
                interval={interval}
            />
        </>

        
    )
}

function SlidesNavigationButton({setDisplaySlide, slidesCount, interval}) {
    return (
        <div className='button-navigation'>
            <button type="button" className='button-navigation-left' 
                onClick={() => {setDisplaySlide(prev => {
                    if (prev === 0){
                        return slidesCount-1
                    }
                    return prev - 1
                    })
                    clearInterval(interval)
                }}
                >
                    &#10094;
            </button>
            <button type="button" className='button-navigation-right'
                onClick={() => {setDisplaySlide(prev => {
                    if (prev === slidesCount-1){
                        return 0
                    }
                    return prev + 1
                    })
                    clearInterval(interval)
                }}
                >
                    &#10095;
                </button>
        </div>
    )
}

export default HeaderCarousel;