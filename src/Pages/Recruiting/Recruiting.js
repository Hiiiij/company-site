/* eslint-disable */
import styled from '@emotion/styled';

import RecruitingImg from '../../Assets/Recruiting.png'
import Brands from '../../Assets/brands.png'
import ContactForm from '../../Components/ContactForm'
import Testimonials from '../../Components/Testimonial/Testimonials'
import job from '../../Assets/recruitingPage/jobIconsvg.svg'
import Process from '../../Components/Process'
import HeroCard from '../../Components/HeroCard';

import AltTv from '../../Assets/AltTv.png'
import laptopPic from '../../Assets/recruitingPage/recruitingPageProcess.png'
import dots from '../../Assets/recruitingPage/dots.svg'

const TestimonialsWrapper = styled.div`
  display: flex;
`

function Recruiting() {
  return (
    <div className='container'>
      {/* need to remove hardcoded text and use same HeroCard for all pages */}
      <HeroCard introImg={RecruitingImg} />
      {/* <img src={RecruitingImg} alt="" /> */}
      {/* <img src={Brands} alt="" /> */}


      {/* <h1 className='txt-hero'>Recruiting
      the best talent for your company</h1>
      <h4 className='sub-txt'>We found out that getting engineers with advanced soft skills, to hire other engineers for companies is extremely efficient. So all our recruiters are knowledgeable in the fields they hire in. Engineers hire engineers, Designers hire other designers and so on.</h4> */}
      <img src={laptopPic} alt="" />
      <img src={dots} alt='' />
      <h2>Invitation by Automation</h2>
      <p>Our revolutionary automation
     tool for recruiting</p>
      <img src={AltTv} alt='' />
     
      <h2>Process</h2>
      <p>In this process an expert recruits another expert. Meaning, for an engineer job opening, an engineer is responsible for recruiting candidates, who are also engineers</p>
      <Process />
      <Testimonials />
      <h2>Job Openings</h2>
      <TestimonialsWrapper>
        {Array(6).fill("").map((item, index) => {
          return (

            <div key={index}>

              <img src={job} alt='' />
              <strong>Senior Product Designer</strong>
              <p>Facebook Berlin, Germany</p>
            </div>
          )
        })}

      </TestimonialsWrapper>
      <ContactForm />

    </div>
  )
}

export default Recruiting;