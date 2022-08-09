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
        <a
          target="_blank"
          href="https://www.linkedin.com/in/barış-kandemir/"
          rel="noreferrer"
        >
          About Me
        </a>
      </nav>
    </header>
  );
}

export default Header;
