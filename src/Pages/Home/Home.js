import brands from "../../Assets/brands.png"
import smiley from "../../Assets/smiley.png"
import softwareeng from "../../Assets/softwareeng.png"
import trolley from "../../Assets/trolley.png"
import introImg from "../../Assets/introImg.png"



import Projects from "./Projects"
import Engineering from './Engineering'
import Recruiting from './Recruiting'
import ECommerceShop from './ECommerceShop'

import Testimonials from '../../Components/Testimonial/Testimonials'
import { homeCardSections } from '../../dummydata/CardSectionsData';
import CardSection from '../../Components/CardSection';
import ContactForm from '../../Components/ContactForm';
import HeroCard from '../../Components/HeroCard';

import "./home.css"

function Home() {
  return (
    <div className="container">
      <HeroCard introImg={introImg} />
      <div className="brand">

        <img src={brands} alt="" />
      </div>

      <ul className="services">
        <li>
          <img src={softwareeng} alt="" />
          <p>Software Engineering</p>
        </li>
        <li>
          <img src={smiley} alt="" />
          <p>IT Recruitment</p>
        </li>
        <li>
          <img src={trolley} alt="" />
          <p>Shopify</p>
        </li>
      </ul>
      <Projects />
      {
        homeCardSections.map(({ title, text, imgUrl, buttonText, hasWave }, index) => (
          <CardSection
            key={title}
            cardTitle={title}
            cardText={text}
            cardImgUrl={imgUrl}
            buttonText={buttonText}
            isReversed={index % 2 !== 0}
            greyBg={index % 2 !== 0}
          >
            {hasWave && 'Potato'}
          </CardSection>
        ))
      }
      <Engineering />
      <Recruiting />
      <ECommerceShop />
      <Testimonials />
      <ContactForm />
      
    </div>

  )
}
export default Home;