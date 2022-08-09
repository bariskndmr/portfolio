import { FooterData } from "./data";

function Footer() {
  return (
    <footer>
      {FooterData.map((item, index) => {
        var Icon = item.icon;
        return (
          <a target="_blank" key={index} rel="noreferrer" href={item.url}>
            <Icon />
          </a>
        );
      })}
    </footer>
  );
}

export default Footer;
