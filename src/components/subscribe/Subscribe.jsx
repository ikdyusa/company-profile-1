import './subscribe.css'


function Subscribe() {
    return (
        <div className="subscribe" style={{backgroundImage: "url('./public/assets/subscribe/alizee-baudez-npJkoTc0P8s-unsplash.jpg')"}}>
            <div className="subscribe-container">
                <div className="subscribe-description">
                    <p>Maecenas at condimentum elit. <span>Donec arcu diam, congue nec consequat at</span>, vulputate ac nisi. Pellentesque.</p>
                </div>
                <div className="subscribe-form-container">
                    <form action="/">
                        <input type="text" placeholder="Input Email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Subscribe