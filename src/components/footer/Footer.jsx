import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-address">
                    <h2>
                        <span>Head Office Bank</span>
                        <input type="checkbox"/>
                    </h2>
                    <ul>
                        <li>Bank Company Tbk.</li>
                        <li>
                            <div className="logo">
                            <i className="fa-solid fa-location-pin"></i>
                            </div>
                            <ul>
                                <li>Jl. Nama Jalan No. Xx</li>
                                <li>Nama Kabupaten 10####</li>
                                <li>Indonesia</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h2>
                        <span>Contact Us</span>
                        <input type="checkbox"/>
                    </h2>
                    <ul>
                        <li>
                            <i className="fa-solid fa-phone"></i>
                            <span><a href='/'>12345/12340005</a></span>
                        </li>
                        <li>
                            <i className="fa-solid fa-envelope"></i>
                            <span><a href="/">bank@bank.co.id</a></span>
                        </li>
                        <li>
                            <a href="/"><i className="fa-brands fa-facebook"></i></a>
                            <a href="/"><i className="fa-brands fa-twitter"></i></a>
                            <a href="/"><i className="fa-brands fa-square-instagram"></i></a>
                            <a href="/"><i className="fa-brands fa-youtube"></i></a>
                        </li>
                    </ul>
                </div>
                <div className="footer-additional-links">
                    <h2>
                        <span>Other Links</span>
                        <input type="checkbox"/>
                    </h2>
                    <ul>
                        <li><a href="/">Bank Products</a></li>
                        <li><a href="/">Deposit Interest</a></li>
                        <li><a href="/">Rates</a></li>
                        <li><a href="/">Loan Interest Rates</a></li>
                        <li><a href="/">Fees & Rates</a></li>
                        <li><a href="/">Whistleblowing System</a></li>
                        <li><a href="/">Career</a></li>
                    </ul>
                </div>
                <div className="footer-company-licensed">
                    <h2>
                        <span>Registered & Supervised By:</span>
                        <input type="checkbox"/>
                    </h2>
                    <ul>
                        <li><img src="./public/assets/footer/logo-ojk-png.png" alt="" /></li>
                        <li><img src="./public/assets/footer/Logo_baru_color_jpeg_LPS.jpg" alt="" /></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer