import "../componentsStyles/Footer.css";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { LiaCopyrightSolid } from "react-icons/lia";

const Footer: React.FC = () => {
  return (
    <div className="footerpage">
      <div className="footerContent">
        <p className="mediumHeading">Kattamuri Kowshiq.</p>
        <div className="footerSocialMedia">
          <a
            href="https://github.com/KOWSHIQKATTAMURI"
            target="_blank"
            rel="noreferrer"
            className="darkBgButton"
          >
            <FaGithub className="svgIcon" />
          </a>
          <a
            href="https://youtube.com/@KattamuriKowshiq"
            rel="noreferrer"
            target="_blank"
            className="darkBgButton"
          >
            <FaYoutube className="svgIcon" />
          </a>
          <a href="https://wa.me/7036160563?text=hey%20Kattamuri" rel="noreferrer" target="_blank" className="darkBgButton">
            <IoLogoWhatsapp className="svgIcon" />
          </a>
        </div>

        <p className="tinyText ccText">
          {" "}
          <LiaCopyrightSolid /> Kowshiq. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

