import React from 'react';

const Home = () => {
  return (
    <div>
      <img src="/recipe.jpg" className="img-fluid w-100 pt-1" alt="Recipe" />
      <div className="row row-cols-1 row-cols-md-2 g-4 m-2">
        <div className="col">
          <div className="card">
            <img src="/photo1.jpg" className="card-img-top" alt="Veg Recipes" />
            <div className="card-body">
              <h5 className="card-title">Veg Recipes</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/photo2.jpg" className="card-img-top" alt="Card title" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/photo3.jpg" className="card-img-top" alt="Card title" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src="/Veg-sandwhich-WS.jpg" className="card-img-top" alt="Card title" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
