import { Link } from "react-router-dom";
import { Logo } from "../../svgs/index";

function Header() {
  return (
    <header>
      <div>
        <Logo />
      </div>
      <nav>
        <a
          target="_blank"
          href="mailto:bariskandemirx@gmail.com"
          rel="noreferrer"
        >
          Contact
        </a>
        <Link to="/about">
          <a target="_blank" href="#" rel="noreferrer">
            About Me
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
