import projects from '../../Assets/projects.jpg';
import { ButtonPrimary } from '../../Primitives/Button/ButtonPrimary';
import { CenterContainer } from '../../Components/StyledComponents';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  padding: 90px 0;
  color: #fff;
  background: #000;
`;
function Projects() {
  return (
    <StyledWrapper>
      <CenterContainer>
        <h1>Projects</h1>
        <img src={projects} alt="" />
        <h2>Logs into LinkedIn and searches by keywords automatically</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor
          et velit a pellentesque. Donec hendrerit vitae lorem non efficitur.
          Fusce lobortis quis leo vitae pulvinar.
        </p>
        <ButtonPrimary>See case →</ButtonPrimary>
      </CenterContainer>
    </StyledWrapper>
  );
}

export default Projects;
