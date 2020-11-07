const projects = () => {
  return (
    <section className="projects">
      <div className="reciepe-editor">
        <div className="title--reciepe-editor">Cooking With React</div>
        <div className="description--reciepe-editor">
          An app that uses CRUD for recipes. React | React Hooks | CSS The state
          is made persistent by using useEffect to save into local storage. The
          state is passed to other components using useContext and props. CSS
          class naming used a BEM (Block, Element, Modifier) approach.
        </div>
        <div className="live--reciepe-editor">
          <a href="https://reciepes.netlify.app/">live</a>
        </div>
        <div className="repo--reciepe-editor">
          <a href="https://github.com/Jason-Prince/Cooking-With-React">repo</a>
        </div>
        <img
          className="image--reciepe-editor"
          src="/reciepeEditor.png"
          alt="reciepe editor"
        />
      </div>

      <div className="web-portfolio">
        <div className="title--web-portfolio">Web Portfolio</div>
        <div className="description--image-search">
          An app that searches the Pixabay API. React | React Hooks | Fetch |
          Tailwind UseEffect and Fetch gather data from Pixabay’s API. The state
          is managed with useState and passed as props to children’s components.
          Styling was accomplished with Tailwind. It’s responsive, uses Grids,
          and has a mobile-first approach.
        </div>
        <div className="live--web-portfolio">
          <a href="http://jason-prince.com">live</a>
        </div>
        <div className="repo--web-portfolio">
          <a href="https://github.com/Jason-Prince/my-portfolio-app">repo</a>
        </div>
        <img
          className="image--web-portfolio"
          src="/reciepeEditor.png"
          alt="reciepe editor"
        />
      </div>

      <div className="image-search">
        <div className="title title--image-search">Pixabay Image Search</div>
        <div className="description description--web-portfolio">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          unde nemo inventore suscipit natus doloremque facere voluptate ab
          eaque nihil, saepe deleniti alias, quia dicta repellat ipsa
          asperiores? A, eum?
        </div>
        <div className="live live--image-search">
          <a href="https://image-search-pixabay.netlify.app/">live</a>
        </div>
        <div className="repo repo--image-search">
          <a href="https://github.com/Jason-Prince/image-gallery">repo</a>
        </div>
        <img
          className="image image--image-search"
          src="/reciepeEditor.png"
          alt="reciepe editor"
        />
      </div>
    </section>
  );
};

export default projects;
