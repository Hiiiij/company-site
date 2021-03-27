import { H1Text } from '../../Components/HeroCard/style'
import clockIcon from '../../Assets/clockIcon.svg'
import clockTwo from '../../Assets/clockTwo.svg'
import dots from '../../Assets/dotsHomePage.svg'
import wheel from '../../Assets/HireWheelIcon.svg'
import introImg from "../../Assets/introImg.png";
import robot from '../../Assets/RobotIcon.svg';
import Projects from "./Projects"
import { homeCardSections } from '../../dummydata/CardSectionsData';
import CardSection from '../../Components/CardSection';
import "./home.css"
import { ContainerWithLayoutMargin } from '../../Components/StyledComponents'
import { HeroCard } from '../../Components/HeroCard/HeroCard';
import styled from '@emotion/styled'
// import SoftwareDev from '../../Assets/Engineering/softwareDev.svg';
const FlexIconsWrapper = styled.div`
display:flex;
width: 100%;

`

const FlexIconContainer = styled.div`
display:flex;
width: 100%;
flex-direction: column;
text-align: center;
align-items: center;
`

const StyledImg = styled.img`
width: 4.1rem;
height: 4.1rem;
object-fit: contain;
`


function Home() {
  return (
    <div>
      <ContainerWithLayoutMargin>
        <HeroCard
          noBorder
          img={introImg}
          description="Our recruiting concept is revolutionary in that we have engineers recruiting engineers for you - designers recruiting designers, product experts recruiting other product people. We found out that experts in a field can spot another expert faster than regular recruiting by pshycology and business majors. Our project case studies are living proof."
          renderLeftSideExtras={() => <img src={dots} />}
          renderHeader={() => <H1Text>Realize your vision with our <span className="txt-highlight">out-of-the-box recruiting</span> </H1Text>}
          rightSideExtras={<span>graphic element</span>}
        />

        <FlexIconsWrapper>
          <FlexIconContainer>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%' }}>
              <StyledImg src={clockIcon} alt="" />
              <StyledImg src={clockTwo} alt="" />
              <StyledImg src={clockTwo} alt="" />
            </div>
            <p>Record Time To Hire</p>
          </FlexIconContainer>
          <FlexIconContainer>
            <StyledImg src={robot} alt="" />
            <p>Automation & AI Usage</p>
          </FlexIconContainer>
          <FlexIconContainer>
            <StyledImg src={wheel} alt="" />
            <p>Engineers Hire Engineers</p>
          </FlexIconContainer>
        </FlexIconsWrapper>
      </ContainerWithLayoutMargin>

      <Projects />


      {homeCardSections.map(({ title, text, imgUrl, buttonText, hasWave }, index) => (
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

    </div >

  )
}
export default Home;