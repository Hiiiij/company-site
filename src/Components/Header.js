import {useState } from "react"
import logo from "../Assets/logo.svg"
import { ReactComponent as DropdownArrow}  from "../Assets/dropdownArrow.svg"
import { ButtonPrimary } from "../Primitives/Button/ButtonPrimary"
import { Link } from "react-router-dom";
import styled from '@emotion/styled'
import { useLocation } from 'react-router-dom'
import React from "react";



const StyledUl = styled.ul`
     display: flex;
     list-style: none;
     font-weight: 700;
     font-size: 17px;
     line-height: 21px;
`

const Logo = styled.span`
    margin-right: auto;
`

const StyledHeader = styled.div`
     display: flex;
     justify-content: flex-end;
     align-items: center;
     margin: 0 auto;
    max-width: 1500px;
`
const StyledDropDownUl  = styled.div`
position: absolute;
padding-top :1.2rem;
`
const StyledLi = styled.li`
margin-right: 20px;
`

const Indicator = styled(DropdownArrow)`
transition: transform 0.2s;
transform: ${props => props.isOpen ? "rotate(0deg)" : "rotate(180deg)" };
`

const StyledSubLink = styled(Link)`
       
      color: ${({ isActiveRoute }) => (
        isActiveRoute ? '#ff0000' : '#222'
    )};

    text-decoration: none;
     &: hover { color: #ff0000; }

`


const StyledLink = styled(Link)`
       color: ${({ isActiveRoute }) => (
        isActiveRoute ? '#ff0000' : '#222'
    )};
    stroke: ${({ isActiveRoute }) => (
        isActiveRoute ? '#ff0000' : '#222'
    )};

    margin-bottom: 10px;
    text-decoration: none;
     &: hover { color: #ff0000; stroke: #ff0000; }
`

const Header = () => {
    const location = useLocation()
    /* hook that updates the location variable when window.location / navigation changes, typically via click but could be anything else */
    const [isOpen,setIsOpen] =useState(false)

const compareCurrentPathWith = (path) => {
        return path === location.pathname
    }

    return (
        <>
            <StyledHeader>
            <Logo>
            <Link to="/"><img src={logo} alt="" /></Link></Logo>
                <StyledUl>

                    <StyledLi>
                        <StyledLink to="/" isActiveRoute={compareCurrentPathWith('/')}>Home</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/projects" isActiveRoute={compareCurrentPathWith('/projects')}>Projects</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink isActiveRoute={isOpen}  onClick={() => setIsOpen(!isOpen)} >Engineering <Indicator isOpen={isOpen} /></StyledLink>
{isOpen && (<StyledDropDownUl>
{/* <StyledLi><StyledLink to="/engineering" isActiveRoute={compareCurrentPathWith('/engineering')} >Engineering</StyledLink></StyledLi> */}
                            <StyledLi><StyledSubLink onClick={() => setIsOpen(false)} isActiveRoute={compareCurrentPathWith('/engineering/externalITDepartment')} to="/engineering/externalITDepartment">External IT Department</StyledSubLink></StyledLi>
                            <StyledLi> <StyledSubLink onClick={() => setIsOpen(false)} isActiveRoute={compareCurrentPathWith('/engineering/rpa')} to="/engineering/rpa">RPA and AI </StyledSubLink></StyledLi>
                            <StyledLi><StyledSubLink onClick={() => setIsOpen(false)} isActiveRoute={compareCurrentPathWith('/engineering/ECommerceShop')} to="/engineering/ECommerceShop">eCommerce Shop Implementation </StyledSubLink></StyledLi>
                            <StyledLi><StyledSubLink onClick={() => setIsOpen(false)} isActiveRoute={compareCurrentPathWith('/engineering/SoftwareDevelopment')} to="/engineering/SoftwareDevelopment">Software Development </StyledSubLink></StyledLi>
                        </StyledDropDownUl>)}
                    

                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/recruiting" isActiveRoute={compareCurrentPathWith('/recruiting')}> Recruiting</StyledLink>
                    </StyledLi>
                    <StyledLi>
                        <StyledLink to="/company" isActiveRoute={compareCurrentPathWith('/company')} >Company</StyledLink>
                    </StyledLi>
                </StyledUl>
                <ButtonPrimary type="primary">Contact</ButtonPrimary>
            </StyledHeader>
        </>
    )
}

export default Header