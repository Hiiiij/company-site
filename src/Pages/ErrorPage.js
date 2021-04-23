import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import FourZeroFour from '../Assets/404.svg';
import Dots from '../Assets/dots.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 420px) {
    flex-direction: row;
  }
  margin-bottom: 72px;
`;

const ErrorHeading = styled.h1`
  max-width: 556px;
  margin-bottom: 72px;
`;

const ErrorImg = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ErrorText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ErrorPage = () => (
  <div>
    <Container>
      <ErrorText>
        <ErrorHeading>The page you were looking for was not found</ErrorHeading>
        <p>
          Return to the <Link to="/">homepage →</Link>
        </p>
      </ErrorText>
      <ErrorImg>
        <img src={FourZeroFour} alt="" />
        <img src={Dots} alt="" />
      </ErrorImg>
    </Container>
  </div>
);

export default ErrorPage;
