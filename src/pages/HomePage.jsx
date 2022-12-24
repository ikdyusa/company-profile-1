import HeaderCarousel from '../components/headercarousel/HeaderCarousel';
import FastMenu from '../components/fastmenu/FastMenu';
import NewsAndPromotion from '../components/newsandpromotion/newsandpromotion';
import Features from '../components/features/Features';
import Sponsor from '../components/sponsor/Sponsor';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../components/footer/Footer';
import Copywrite from '../components/copywrite/Copywrite';

function HomePage() {
  return (
    <>
    <HeaderCarousel/>
    <FastMenu></FastMenu>
    <NewsAndPromotion></NewsAndPromotion>
    <Features></Features>
    <Sponsor></Sponsor>
    <Subscribe></Subscribe>
    <Footer></Footer>
    <Copywrite></Copywrite>
    </>
  )
}

export default HomePage;


