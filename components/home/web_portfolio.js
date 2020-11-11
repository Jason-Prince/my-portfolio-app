const web_portfolio = () => {
  return (
    <div className="web_portfolio">
      <a href="http://jason-prince.com">
        <img
          src="/cooking_with_react.png"
          alt="cooking with react"
          className="web_portfolio__image"
        />
      </a>
      <div className="web_portfolio__content">
        <div className="web_portfolio__content__title">Web Portfolio</div>
        <div className="web_portfolio__content__subtitle">
          An app to host my portfolio
        </div>
        <div className="web_portfolio__content__details">
          nextjs | sass | mobil first
          <br />
          responsive | bem | css grid
        </div>
      </div>
    </div>
  );
};

export default web_portfolio;
