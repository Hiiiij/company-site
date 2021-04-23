import styled from '@emotion/styled';
import { ContactForm } from '../../Components/ContactForm';
import Testimonials from '../../Components/Testimonial/Testimonials';
import job from '../../Assets/recruitingPage/jobIconsvg.svg';
import Process from '../../Components/Process';
import { H1Text } from '../../Components/HeroCard/style';
import AltTv from '../../Assets/AltTv.png';
import laptopPic from '../../Assets/recruitingPage/recruitingPageProcess.png';
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import { CenterContainer } from '../../Components/StyledComponents';

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const StyledImageContainer = styled.div`
  position: relative;
`;

const StyledImageText = styled.div`
  position: absolute;
  top: 0;
  color: #fff;
  left: var(--layout-margin);
`;
const StyledParagraph = styled.p`
  background: #000;
  color: #fff;
`;
const StyledHeader = styled.h2`
  background: #000;
  text-align: center;
  width: 23rem;
  height: 7.5rem;
`;

const JobOpeningsWrapper = styled.section`
  display: flex;
  width: 100%;
`;

const JobOpening = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

function Recruiting() {
  return (
    <div className="container">
      <CenterContainer>
        <HeroCard
          noBorder
          description="We found out that getting engineers with advanced soft skills, to hire other engineers for companies is extremely efficient. So all our recruiters are knowledgeable in the fields they hire in. Engineers hire engineers, Designers hire other designers and so on."
          img={laptopPic}
          renderHeader={() => (
            <H1Text>
              Recruiting <div className="txt-highlight">the best talent</div>{' '}
              for your company
            </H1Text>
          )}
        />
      </CenterContainer>

      <StyledImageContainer>
        <StyledImage src={AltTv} alt="" />
        <StyledImageText>
          <StyledHeader>Invitation by Automation</StyledHeader>
          <StyledParagraph>
            Our revolutionary automation tool for recruiting
          </StyledParagraph>
        </StyledImageText>
      </StyledImageContainer>
      <CenterContainer>
        <h2>Process</h2>
        <p>
          In this process an expert recruits another expert. Meaning, for an
          engineer job opening, an engineer is responsible for recruiting
          candidates, who are also engineers
        </p>

        <Process />
      </CenterContainer>

      <Testimonials />
      <CenterContainer>
        <h2 style={{ textAlign: 'center' }}>Job Openings</h2>
        <JobOpeningsWrapper>
          {Array(6)
            .fill('')
            .map((item, index) => {
              return (
                <JobOpening key={index}>
                  <img
                    style={{
                      width: '62px',
                      height: '62px',
                      objectFit: 'contain',
                    }}
                    src={job}
                    alt=""
                  />
                  <strong style={{ fontWeight: 'bold', fontSize: '1.375rem' }}>
                    Senior Product Designer
                  </strong>
                  <p style={{ fontSize: '1.375rem' }}>
                    Facebook Berlin, Germany
                  </p>
                </JobOpening>
              );
            })}
        </JobOpeningsWrapper>
      </CenterContainer>

      <ContactForm />
    </div>
  );
}

export default Recruiting;
