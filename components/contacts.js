import Twitter from "../components/svg/twitter";
import Github from "../components/svg/github";
import Linkedin from "../components/svg/linkedin";
import Phone from "../components/svg/googleVoice";
import Email from "../components/svg/gmail";

const contacts = () => {
  return (
    <section className="contacts">
      <div className="contact__twitter">
        <a href="https://twitter.com/Enders_Game" target="_blank">
          <Twitter />
        </a>
      </div>
      <div className="contact__github">
        <a href="https://github.com/jason-prince" target="_blank">
          <Github />
        </a>
      </div>
      <div className="contact__linkedin">
        <a href="https://www.linkedin.com/in/jason-c-prince/" target="_blank">
          <Linkedin />
        </a>
      </div>
      <div className="contact__phone">
        <Phone />
      </div>
      <div className="contact__email">
        <Email />
      </div>
    </section>
  );
};

export default contacts;
