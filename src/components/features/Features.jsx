import './features.css'


const featuresText = [
    {
        title: "Lorem ipsum dolor",
        desc:"Fusce faucibus, massa ornare faucibus eleifend, sapien justo hendrerit dolor, quis consectetur sem quam vitae.",
        icon: <i className="fa-solid fa-credit-card"></i>
    },
    {
        title: "Integer eleifend euismod",
        desc:"Ut ut tempus sapien. Sed a ante et risus efficitur vestibulum viverra at velit. Morbi.",
        icon: <i className="fa-solid fa-people-group"></i>
    },
    {
        title: "Nam ut",
        desc:"Sed a diam in diam maximus mollis. Fusce tortor dui, mattis a faucibus eget, gravida.",
        icon: <i className="fa-solid fa-earth-asia"></i>
    },
    {
        title: "Curabitur ornare",
        desc:"Morbi et suscipit purus. Ut sed imperdiet diam. In id elementum dolor. Aenean eu pharetra.",
        icon: <i className="fa-solid fa-location-dot"></i>
    },
    {
        title: "Pellentesque ut porttitor",
        desc:"Nulla hendrerit, purus a mollis accumsan, nulla neque interdum tortor, ut lacinia tellus leo ac.",
        icon: <i className="fa-solid fa-star"></i>
    },
]

function Features() {
    return (
        <div className="features-container"
            style={{backgroundImage: "url('./public/assets/features/leone-venter-VieM9BdZKFo-unsplash.jpg')"}}>
            <div className="features-main-desc">
                <h1 className='reveal'>Why Banking With BANK?</h1>
                <p className='reveal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada ac felis rhoncus elementum. Proin a ipsum nunc. Etiam interdum justo vitae magna posuere consectetur.</p>
            </div>
            <div className="features-features-container">
                    {featuresText.map((x,y) => {
                        return (
                            <div key={y} className='reveal'>
                                <div className='icon'>{x.icon}</div>
                                <div className='description'>
                                    <h3>{x.title}</h3>
                                    <p>{x.desc}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>

        </div>
    )
}

export default Features