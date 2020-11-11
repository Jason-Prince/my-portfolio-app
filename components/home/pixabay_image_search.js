const pixabay_image_search = () => {
  return (
    <div className="pixabay_image_search">
      <img
        src="/pixabay.png"
        alt="cooking with react"
        className="pixabay_image_search__image"
      />
      <div className="pixabay_image_search__content">
        <div className="pixabay_image_search__content__title">
          Pixabay Image Search
        </div>
        <div className="pixabay_image_search__content__details">
          pixabay_image_search__content__details
        </div>
        <div className="pixabay_image_search__content__live">demo</div>
        <div className="pixabay_image_search__content__repo">code</div>
      </div>
    </div>
  );
};

export default pixabay_image_search;
