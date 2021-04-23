import logo from '../../Assets/logo.svg';
import { Link } from 'react-router-dom';

import { CenterContainer } from '../StyledComponents';
import Facebook from '../../Assets/facebook.svg';
import Instagram from '../../Assets/instagram.svg';
import Linkedin from '../../Assets/linkedin.svg';
import styled from '@emotion/styled';

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;
const BottomFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
`;
const SocialIcons = styled.li`
  margin-left: 0.5rem;
`;
const TopFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FooterRight = styled.div`
  display: flex;
`;

const Footer = () => {
  return (
    <CenterContainer>
      <TopFooter>
        <div>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <p>
            Wicherstr. 52,
            <br />
            10439 Berlin, Germany
          </p>
        </div>

        <FooterRight>
          <div>
            <h4>Contact</h4>
            <FooterLinks>
              <li>
                <a href="tel;+49 221 25912509"> +49 221 25912509</a>
              </li>
              <li>
                <a href="mailto:hello@dzemo.com"> hello@dzemo.com</a>
              </li>
              <li>
                <a href="">Contact us</a>
              </li>
            </FooterLinks>
          </div>

          <div>
            <h4>Company</h4>
            <FooterLinks>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/engineering">Engineering</Link>
              </li>
              <li>
                <Link to="/recruiting">Recruiting</Link>
              </li>
              <li>
                <Link to="/company">Company</Link>
              </li>
            </FooterLinks>
          </div>

          <div>
            <h4>Pages</h4>
            <FooterLinks>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <Link to="/testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
            </FooterLinks>
          </div>
        </FooterRight>
      </TopFooter>
      <hr />
      <BottomFooter>
        <p>&copy; 2020</p>
        <SocialLinks>
          <SocialIcons>
            <img src={Facebook} />
          </SocialIcons>
          <SocialIcons>
            <img src={Instagram} />
          </SocialIcons>
          <SocialIcons>
            <img src={Linkedin} />
          </SocialIcons>
        </SocialLinks>
      </BottomFooter>
    </CenterContainer>
  );
};

export default Footer;
