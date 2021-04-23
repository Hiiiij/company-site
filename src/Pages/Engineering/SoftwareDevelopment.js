import { HeroCard } from '../../Components/HeroCard/HeroCard';
import Software from '../../Assets/Engineering/softwareDev.svg';
import { H1Text } from '../../Components/HeroCard/style';
import Testimonials from '../../Components/Testimonial/Testimonials';
import { CardGrid } from './CardGrid';
import Neu from '../../Assets/projects.jpg';
import Dots from '../../Assets/dotsSoftwareDev.svg';
import { CenterContainer } from '../../Components/StyledComponents';
import styled from '@emotion/styled';

const RedDescription = styled.div`
  display: flex;
  align-items: center;
`;

const Years = styled.p`
  font-size: 1.875 rem;
  line-height: 37.61px;
  color: var(--primary-color);
  font-weight: bold;
  margin-left: 20px;
`;
const Twenty = styled.p`
  font-size: 4rem;
  color: var(--primary-color);
  font-weight: bold;
  margin-left: 20px;
`;

const softwareDevEngineeringData = {
  header: {
    beforeHighlight: 'Software',
    highlight: 'Development',
  },
  description:
    'We develop modern software for the web, mobile and desktop. We use state-of-the-art technology like React, Node.js, PHP, Symfony, Python, Javascript, etc to create astounding software ultra modern software is one of our core values. We have a balanced team of engineers with 20 years of experience and younger engineers affine to the newest technologies like React and Node.js',
  img: Software,
};

const projectCardData = [
  {
    img: Neu,
    title: 'Home24 Backend Engineering',
  },
  {
    img: Neu,
    title: 'Home24 Backend Engineering',
  },
  {
    img: Neu,
    title: 'Home24 Backend Engineering',
  },
  {
    img: Neu,
    title: 'Home24 Backend Engineering',
  },
  {
    img: Neu,
    title: 'Home24 Backend Engineering',
  },
  {
    img: Neu,
    title: 'Home24 Backend Engineering',
  },
];

function SoftwareDevelopment() {
  return (
    <>
      <CenterContainer>
        <HeroCard
          noBorder
          description={softwareDevEngineeringData.description}
          img={softwareDevEngineeringData.img}
          renderLeftSideExtras={() => {
            return (
              <RedDescription>
                <img src={Dots} />
                <Twenty>20+</Twenty>
                <Years>
                  years
                  <br />
                  of experience{' '}
                </Years>
              </RedDescription>
            );
          }}
          renderHeader={() => (
            <H1Text>
              {softwareDevEngineeringData.header.beforeHighlight}{' '}
              <span className="txt-highlight">
                {softwareDevEngineeringData.header.highlight}
              </span>
            </H1Text>
          )}
        />
      </CenterContainer>

      <CardGrid projectCardData={projectCardData} />

      <Testimonials />
    </>
  );
}

export default SoftwareDevelopment;
