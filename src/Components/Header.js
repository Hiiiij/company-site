import logo from "../Assets/logo.svg"
import { ButtonPrimary } from "../Primitives/Button/ButtonPrimary"
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'

const StyledUl = styled.ul`
     display: flex;
     list-style: none;

`
const StyledHeader = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin: 0 auto;
    max-width: 1500px;
`

const StyledLink = styled(Link)`
       color: ${({ isActiveRoute }) => (
        isActiveRoute ? '#ff0000' : '#222'
    )};

    text-decoration: none;
     &: hover { color: #ff0000; }

`

const Header = () => {
    const location = useLocation()
    // '/projeccts'
    /* hook that updates the location variable when window.location / navigation changes, typically via click but could be anything else */

    const compareCurrentPathWith = (path) => {
        return path === location.pathname
    }

    return (
        <>
            <StyledHeader>
                <Link to="/"><img src={logo} alt="" /></Link>
                <StyledUl>
                    <li>
                        <StyledLink to="/" isActiveRoute={compareCurrentPathWith('/')}>Home</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/projects" isActiveRoute={compareCurrentPathWith('/projects')}>Projects</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/engineering" isActiveRoute={compareCurrentPathWith('/engineering')}>Engineering</StyledLink>

                        <StyledUl>
                            <li key={1}><StyledLink isActiveRoute={compareCurrentPathWith('/engineering/externalITDepartment')} to="/engineering/externalITDepartment">External IT Department</StyledLink></li>
                            <li key={2}> <StyledLink isActiveRoute={compareCurrentPathWith('/engineering/rpa')} to="/engineering/rpa">RPA and AI </StyledLink></li>
                            <li key={3}><StyledLink isActiveRoute={compareCurrentPathWith('/engineering/ECommerceShop')} to="/engineering/ECommerceShop">eCommerce Shop Implementation </StyledLink></li>
                            <li key={4}><StyledLink isActiveRoute={compareCurrentPathWith('/engineering/SoftwareDevelopment')} to="/engineering/SoftwareDevelopment">Software Development </StyledLink></li>
                        </StyledUl>

                    </li>
                    <li>
                        <StyledLink to="/recruiting" isActiveRoute={compareCurrentPathWith('/recruiting')}> Recruiting</StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/company" isActiveRoute={compareCurrentPathWith('/company')} >Company</StyledLink>
                    </li>
                </StyledUl>
                <ButtonPrimary type="primary">Contact</ButtonPrimary>
            </StyledHeader>
        </>
    )
}

export default Header