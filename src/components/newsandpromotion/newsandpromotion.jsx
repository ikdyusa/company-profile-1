import { useReducer, useContext, createContext } from 'react'
import './newsandpromotion.css'
import posts from './newsandpromotionPosts'


const NewsAndPromotionContext = createContext()

function reducer (state, action) {
    switch (action.type) {
        case ACTION.RESET_SLIDE:
            return {...state, leftSwipe: -5}
        case ACTION.SWIPE_SLIDE_RIGHT:
            const activeLength = document
                .querySelector("li.active>ul.news-and-promotion-category-items")
                .childNodes
                .length
            if (window.innerWidth <= 707) {
                if (-5 - ((activeLength - 1) * 230) === state.leftSwipe){
                    return {...state, leftSwipe: state.leftSwipe}
                }
            } else if (window.innerWidth <= 1055) {
                if (-5 - ((activeLength - 2) * 230) === state.leftSwipe){
                    return {...state, leftSwipe: state.leftSwipe}
                }
            } else {
                if (-5 - ((activeLength - 3) * 230) === state.leftSwipe){
                    return {...state, leftSwipe: state.leftSwipe}
                }
            }
            
            return {...state, leftSwipe: state.leftSwipe - 230}
        case ACTION.SWIPE_SLIDE_LEFT:
            if (-5 === state.leftSwipe){
                return {...state, leftSwipe: state.leftSwipe}
            }
            return {...state, leftSwipe: state.leftSwipe + 230}
        case ACTION.SET_CATEGORY_ACTIVE: 
            return {...state, categoryActive: action.setCategoryActive}
        default:
            return state

    }
}

const ACTION = {
    RESET_SLIDE: "reset_slide",
    SWIPE_SLIDE_RIGHT: "swipe_slide_right",
    SWIPE_SLIDE_LEFT: "swipe_slide_left",
    SET_CATEGORY_ACTIVE: "set_category_active"
}

const initialState = {leftSwipe: -5, categoryActive: "all"}

function NewsAndPromotion() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <NewsAndPromotionContext.Provider value={{state, dispatch}}>
            <div className='news-and-promotion-container'>
                <h1>Discover our latest news & promotions</h1>
                <div className='news-and-promotion-container-inner'>
                    <div className='news-and-promotion-container-inner-inner'>
                        <CategoryHeaderContainer 
                        />
                        <CategoryItemsContainer
                        />
                    </div>
                </div>
            </div>
        </NewsAndPromotionContext.Provider>
    )
}


function CategoryHeaderContainer() {
    const {state, dispatch} = useContext(NewsAndPromotionContext)
    const CategoryHeader = ({children}) =>  {
        return (
            <li>
                <h2 
                    onClick={(e) => {
                        dispatch({type: ACTION.RESET_SLIDE})
                        dispatch({type: ACTION.SET_CATEGORY_ACTIVE, 
                            setCategoryActive: e.target.innerText.toLowerCase()
                        })
                    }}

                    className={state.categoryActive === children.toLowerCase()? "active": ""}
                    >
                        <span></span>
                        <span>{children}</span>
                </h2>
            </li>
        )
    }
    return (
            <ul className='news-and-promotion-category-header reveal'>
                <CategoryHeader>All</CategoryHeader>
                <CategoryHeader>Promotion</CategoryHeader>
                <CategoryHeader>News</CategoryHeader>
                <CategoryHeader>Announcement</CategoryHeader>
                <CategoryHeader>Fraud</CategoryHeader>
                <CategoryHeader>Auction</CategoryHeader>
            </ul>
    )
}


function CategoryItemsContainer() {
    const {state, dispatch} = useContext(NewsAndPromotionContext)
    const CategoryItem = ({children}) => {
        return (
            <li className={`${state.categoryActive === children.toLowerCase()?"active reveal-active":""}`}>
                <ul className='news-and-promotion-category-items'
                    style={{left: `${state.leftSwipe}px`}}>
                    {posts.filter((x,y) => {
                        if (children.toLowerCase() === 'all') {
                            return x
                        }
                        return children.toLowerCase() === x.tags
                        })
                        .slice(0, 4)
                        .map((x,y) => {
                            return (
                                <li key={y*300}>
                                    <a href={x.link}>
                                        <img src={x.thumbnail} className="news-and-promotion-thumbnail" alt={"news-and-promotion-thumbnail" + y} />
                                        <h3>{x.title}</h3>
                                        <div>
                                            <span>{x.tags}</span>
                                        </div>
                                        <p>Date: {x.uploaded}</p>
                                    </a>
                                </li>
                            )
                        })
                    }
                    <li>
                        <a id="view-more" href="/"><span>View more</span></a>
                    </li>
                </ul>
            </li>
        )
    
}
    return (
        <div className='news-and-promotion-category-items-container'>
            <button className="news-and-promotion-btn" type="button"
                onClick={() => dispatch({type: ACTION.SWIPE_SLIDE_LEFT})}
                >
                    &#10094;
            </button>
            <ul>
                <CategoryItem>All</CategoryItem>
                <CategoryItem>Promotion</CategoryItem>
                <CategoryItem>News</CategoryItem>
                <CategoryItem>Announcement</CategoryItem>
                <CategoryItem>Fraud</CategoryItem>
                <CategoryItem>Auction</CategoryItem>
            </ul>
            <button className="news-and-promotion-btn" type="button"
                    onClick={() => dispatch({type: ACTION.SWIPE_SLIDE_RIGHT})}
                    >
                        &#10095;
                </button>
        </div>
    )
}



export default NewsAndPromotion