import styled from '@emotion/styled';
import { ContactForm } from '../../Components/ContactForm';
import Testimonials from '../../Components/Testimonial/Testimonials';
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import { ContainerWithLayoutMargin } from '../../Components/StyledComponents';
import { H1Text } from '../../Components/HeroCard/style';
import HeroCompany from '../../Assets/Company/HeroCompany.jpg';
import Honesty from '../../Assets/Company/Honesty.jpg';
import Wave from '../../Assets/Company/wave.svg';


const HonestyWrapper = styled.div`
display:flex;

`



function Company() {
  return (
  <>
      <ContainerWithLayoutMargin>
        <HeroCard
          noBorder
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar"
          img={HeroCompany}
          renderHeader={() => <H1Text>We’re software engineers
          and UX designers</H1Text>}
          renderRightSideExtras={() => <img src={Wave} />}
          />
        
     
          <HonestyWrapper>
          <img src={Honesty} alt="" />
        
        <div>
          <div>
            <h3>Honesty & Responsibility</h3>
            <p>We don’t aim to know everything. But what we do know, we know well, and use it to build trust through honesty and quality delivery.</p>
          </div>
          <div>
            <h3>Technology & Simplicity</h3>
            <p>A technological revolution shouldn’t equate to complication. We develop intuitive, self-explaining software, so that your user immediately feels the added value.</p>
          </div>
        </div>
            </HonestyWrapper>
      <div>
        <h2> The Team</h2>
        <p>Our developer roots are the fruit of MIMUW: the best computer science university in Poland and one of the top 5 in the world. Since the 70s, the faculty is ranked #1 in Poland and is consistently ranked in the TOP 5 in the World’s most reputable team programming contests.</p>
      </div>
       </ContainerWithLayoutMargin>
      <Testimonials/>
      <ContactForm />
    
      
        </>
  );
}


export default Company;