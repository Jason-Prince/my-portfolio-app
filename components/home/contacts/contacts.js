import Twitter from "./logos/twitter";
import Github from "./logos/github";
import Linkedin from "./logos/linkedin";

const contacts = () => {
  return (
    <section className="contacts">
      <div className="row row--a col col--a">contact me</div>
      <div className="row row--b col col--a">
        <a href="https://twitter.com/Enders_Game" target="_blank">
          <Twitter />
        </a>
      </div>
      <div className="row row--b col col--b">
        <a href="https://github.com/jason-prince" target="_blank">
          <Github />
        </a>
      </div>
      <div className="row row--b col col--c">
        <a href="https://www.linkedin.com/in/jason-c-prince/" target="_blank">
          <Linkedin />
        </a>
      </div>
      <div className="row row--c col col--a">(415) 498-0783</div>
      <div className="row row--c col col--b">jason.c.prince@gmail.com</div>
    </section>
  );
};

export default contacts;
