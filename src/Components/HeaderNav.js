import { Link } from "react-router-dom";
import { ButtonPrimary } from "../Primitives/Button/ButtonPrimary"

const HeaderNav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/engineering">Engineering</Link>
          
          <ul>
            <li><Link to="/engineering/externalITDepartment">External IT Department</Link></li>
            <li><Link to="/engineering/rpa">RPA and AI </Link></li>
            <li><Link to="/engineering/ECommerceShop">eCommerce Shop Implementation </Link></li>
            <li><Link to="/engineering/SoftwareDevelopment">Software Development </Link></li>
          </ul>

        </li>
        <li>
          <Link to="/recruiting">Recruiting</Link>
        </li>
        <li>
          <Link to="/company">Company</Link>
        </li>
      </ul>
      <ButtonPrimary>Contact</ButtonPrimary>
    </>
  )
}

export default HeaderNav