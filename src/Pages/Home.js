import brands from "../Assets/brands.png"
import smiley from "../Assets/smiley.png"
import softwareeng from "../Assets/softwareeng.png"
import trolley from "../Assets/trolley.png"
import introImg from "../Assets/introImg.png"
import "./home.css"
import Projects from "./Projects"
import Engineering from './Engineering'
import Recruiting from './Recruiting'
import ECommerceShop from './ECommerceShop'
import Testimonials from '../Components/Testimonial/Testimonials'
// import ExtrenalITDepartment from './ExtrenalITDepartment'

import { homeCardSections } from '../dummydata/CardSectionsData';
import CardSection from '../Components/CardSection';
import ContactForm from '../Components/ContactForm';

function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div>
          <h1 className="txt-hero">Realize your vision with our <span className="txt-highlight">out-of-the-box recruiting</span></h1>
          <h4 className="sub-txt">Our recruiting concept is revolutionary in that we have engineers recruiting engineers for you - designers recruiting designers, product experts recruiting other product people. We found out that experts in a field can spot another expert faster than regular recruiting by pshycology and business majors. Our project case studies are living proof.</h4>
        </div>
        <div>
          <img src={introImg} alt="" />
        </div>
      </div>

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
          >
            {hasWave && 'Potato'}
          </CardSection>
        ))
      }
      {/* <Projects />
      <Engineering />
      <Recruiting />
      <ECommerceShop /> */}
      <Testimonials />
      <ContactForm />
    </div>

  )
}

export default Home;