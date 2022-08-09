import { FooterData } from "./data";

function Footer() {
  return (
    <footer>
      <div>
        {FooterData.map((item, index) => {
          var Icon = item.icon;
          return (
            <a target="_blank" key={index} rel="noreferrer" href={item.url}>
              <Icon />
            </a>
          );
        })}
      </div>
    </footer>
  );
}

export default Footer;
