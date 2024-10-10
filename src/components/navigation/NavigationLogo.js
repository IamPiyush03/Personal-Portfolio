import { NavLink } from "react-router-dom";
import IconBlack from "../../assets/images/icons8-developer.gif";
import ScrollToTop from "../../helpers/ScrollToTop";

const NavigationLogo = (props) => {
  return (
    <NavLink
      to="/"
      className="navigation__logo"
      onClick={() => {
        ScrollToTop();
        props.closeMenu();
      }}
    >
      <img src={IconBlack} alt="" aria-hidden="true"></img>
    </NavLink>
  );
};

export default NavigationLogo;
