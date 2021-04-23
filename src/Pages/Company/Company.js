import styled from '@emotion/styled';
import { ContactForm } from '../../Components/ContactForm';
import Testimonials from '../../Components/Testimonial/Testimonials';
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import { CenterContainer } from '../../Components/StyledComponents';
import { H1Text } from '../../Components/HeroCard/style';
import HeroCompany from '../../Assets/Company/HeroCompany.jpg';
import Honesty from '../../Assets/Company/Honesty.jpg';
import Wave from '../../Assets/Company/wave.svg';
import Number2 from '../../Assets/nb2.svg';
import Number1 from '../../Assets/nb1.svg';
import Dots from '../../Assets/Engineering/dotsExternalIt.svg';
import Favicon from '../../Assets/Company/FaviconXing.svg';
import Team1 from '../../Assets/Company/Team1.jpg';
import Team2 from '../../Assets/Company/Team2.jpg';
import Team3 from '../../Assets/Company/Team3.jpg';
import Team4 from '../../Assets/Company/Team4.jpg';
import Map from '../../Assets/Company/Frame.svg';
import { TeamGrid } from './CompanyGrid';

const Imgdiv = styled.div`
  display: flex;
  justify-content: center;
`;

const HonestyWrapper = styled.div`
  display: flex;
`;
const SectionsDivider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const ImgNb = styled.img`
  margin-right: 57px;
  margin-bottom: 200px;
`;
const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TeamWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  align-items: center;
  margin: 55px auto 0 auto;
`;
const MapSection = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 200px;
`;
const TextMapSection = styled.div`
  display: flex;
  margin-left: var(--layout-margin);
  ${'' /* max-width:50%; */}
  ${'' /* flex-direction: column; */}
`;
const WaveComponent = styled.div`
  display: flex;
  margin: 4rem 0px;
  justify-content: center;
`;

const LeftSide = styled.div`
  width: 100%;
`;
const MapWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

const teamCardData = [
  {
    img: Team1,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team2,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team3,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team4,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team1,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team2,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team2,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team2,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
  {
    img: Team2,
    name: 'Edgar Bongkishi',
    title: 'Managing Director',
    favicon: Favicon,
  },
];

function Company() {
  return (
    <>
      <CenterContainer>
        <HeroCard
          noBorder
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor et velit a pellentesque. Donec hendrerit vitae lorem non efficitur. Fusce lobortis quis leo vitae pulvinar"
          img={HeroCompany}
          renderHeader={() => (
            <H1Text>We’re software engineers and UX designers</H1Text>
          )}
          renderRightSideExtras={() => <img src={Wave} />}
        />
        <HonestyWrapper>
          <img src={Honesty} alt="" />

          <SectionsDivider>
            <HonestyWrapper>
              <Imgdiv>
                <ImgNb src={Number1} alt="" />
              </Imgdiv>
              <div>
                <h3>Honesty & Responsibility</h3>
                <p>
                  We don’t aim to know everything. But what we do know, we know
                  well, and use it to build trust through honesty and quality
                  delivery.
                </p>
              </div>
            </HonestyWrapper>
            <HonestyWrapper>
              <Imgdiv>
                <ImgNb src={Number2} alt="" />
              </Imgdiv>
              <div>
                <h3>Technology & Simplicity</h3>
                <p>
                  A technological revolution shouldn’t equate to complication.
                  We develop intuitive, self-explaining software, so that your
                  user immediately feels the added value.
                </p>
              </div>
            </HonestyWrapper>
          </SectionsDivider>
        </HonestyWrapper>
        <TeamWrapper>
          <h2> The Team</h2>
          <p>
            Our developer roots are the fruit of MIMUW: the best computer
            science university in Poland and one of the top 5 in the world.
            Since the 70s, the faculty is ranked #1 in Poland and is
            consistently ranked in the TOP 5 in the World’s most reputable team
            programming contests.
          </p>
        </TeamWrapper>
        <DotsContainer>
          <img src={Dots} alt="" />
        </DotsContainer>
        <TeamGrid teamCardData={teamCardData} />
      </CenterContainer>
      <MapSection>
        <TextMapSection>
          <LeftSide>
            <h2>
              What it’s like
              <br />
              working with us
            </h2>
            <p>
              Before telling us what you need, we like to spend the time to get
              to know why you need it. This genuine interest can help flesh out
              a more-complete solution by combining nearly 20 years of UX design
              experience, technical know-how, and quality standards.
            </p>
          </LeftSide>
          <MapWrapper>
            <img src={Map} />
          </MapWrapper>
        </TextMapSection>
        <WaveComponent>
          <img src={Wave} />
        </WaveComponent>
      </MapSection>
      <Testimonials />
      <ContactForm />
    </>
  );
}

export default Company;
