import Twitter from "../components/svg/twitter";
import Github from "../components/svg/github";
import Linkedin from "../components/svg/linkedin";

const contacts = () => {
  return (
    <section className="contacts">
      <div className="contact item--title">contact me</div>
      <div className="contact item--twitter">
        <a href="https://twitter.com/Enders_Game" target="_blank">
          <Twitter />
        </a>
      </div>
      <div className="contact item--github">
        <a href="https://github.com/jason-prince" target="_blank">
          <Github />
        </a>
      </div>
      <div className="contact item--linkedin">
        <a href="https://www.linkedin.com/in/jason-c-prince/" target="_blank">
          <Linkedin />
        </a>
      </div>
      <div className="contact item--phone-number">(415) 498-0783</div>
      <div className="contact item--email-address">
        jason.c.prince@gmail.com
      </div>
    </section>
  );
};

export default contacts;
