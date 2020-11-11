const contact_me = () => {
  return (
    <div className="contact_me">
      <div className="contact_me__linkedin">
        <i className="fab fa-linkedin icon__linkedin"></i>
        <a
          href="https://www.linkedin.com/in/jason-c-prince/"
          className="link__linkedin"
          target="_blank"
        >
          linkedin profile
        </a>
        <i className="fas fa-external-link-alt icon__external_link"></i>
      </div>
      <div className="contact_me__github">
        <i className="fab fa-github-square icon__github"></i>
        <a
          className="link__github"
          href="https://github.com/jason-prince"
          target="_blank"
        >
          github profile
        </a>
        <i className="fas fa-external-link-alt icon__external_link"></i>
      </div>
      <div className="contact_me__phone">
        <i class="fas fa-phone-square-alt"></i>
        (415) 498-0783
      </div>
      <div className="contact_me__email">
        <i className="fas fa-envelope-square"></i>
        jason.c.prince@gmail.com
      </div>
    </div>
  );
};

export default contact_me;
