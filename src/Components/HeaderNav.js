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