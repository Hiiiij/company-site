import styled from '@emotion/styled';
import ForHire from '../../Assets/forHire.jpg';
import Dots from '../../Assets/dots.jpg';

const Hero = styled.div`
  display: flex;
`;

const GreyBackground = styled.div`
  background: #f1f1f1;
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    left: 0;
    background: url(${Dots});
  }
`;

const Jobs = () => {
  return (
    <>
      <div className="container">
        <Hero>
          <div>
            <h1>
              People we’re <span className="txt-highlight">looking for</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              auctor et velit a pellentesque. Donec hendrerit vitae lorem non
              efficitur. Fusce lobortis quis leo vitae pulvinar.
            </p>
          </div>
          <img src={ForHire} alt="" />
        </Hero>
      </div>
      <GreyBackground>
        <div className="container">
          <h3>Senior React Engineer</h3>
          <p>
            Shop-Apotheke.de is Germany’s No 1 Online Pharmacy and is currently
            expanding internationally, needing talented Experts to champion its
            state-of-the-art technology stacks.
          </p>
          <p>
            For this React.js position and excellent engineer with the following
            skills is being sort after
          </p>
          <h4>Soft Skills</h4>
          <ul>
            <li>Team leadership experience </li>
            <li>
              Excellence in communication, adaptability, out-of-the-box
              thinking, cultural sensitivity, empathy
            </li>
            <li>
              Experience in understanding the business needs of the company and
              implementing them with a high degree of independence
            </li>
            <li>Excellent mastery of the English or German language</li>
          </ul>
          <h4>Hard Skills</h4>
          <ul>
            <li>5+ years full-time JavaScript experience</li>
            <li>
              2+ years full-time React experience Functional Components Redux
              Redux Thunk / Redux Saga / Redux Observable etc
            </li>
            <li>Git / Version Control</li>
            <li>CSS: Flexbox & Mobile First Development</li>
            <li>Docker (Workflows, CLI)</li>
            <li>CI/CD (ideally CircleCI)</li>
          </ul>
        </div>
      </GreyBackground>
    </>
  );
};

export default Jobs;
