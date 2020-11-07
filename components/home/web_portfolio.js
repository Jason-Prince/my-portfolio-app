import Web_portfolio__content from "./web_portfolio__content";

const web_portfolio = () => {
  return (
    <div className="web_portfolio">
      <img
        src="/cooking_with_react.png"
        alt="cooking with react"
        className="web_portfolio__image"
      />
      <div className="web_portfolio__content__container">
        <Web_portfolio__content />
      </div>
    </div>
  );
};

export default web_portfolio;
