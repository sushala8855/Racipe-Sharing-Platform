import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './Home.css';  // Import custom CSS

const Home = () => {
  return (
    <div>
      <div className="container mt-4">
        <div className="row align-items-center mb-4">
          <div className="col-md-6">
            <img src="/sandwitch.jpg" className="img-fluid w-100 pt-1" alt="Recipe" style={{ height: '400px', objectFit: 'cover', borderRadius: '15px' }} />
          </div>
          <div className="col-md-6">
            <div className="card h-100 shadow-sm custom-card" style={{ borderRadius: '15px', padding: '20px', textAlign: 'center',height: '400px' }}>
              <div className="card-body">
                <h1 className="card-title">Get Creative with your Sandwitch:Subway-Style Sandwitch Recipe</h1>
                <p className="card-text">
                  Welcome to our recipe collection! Dive into a world of flavors and discover our carefully curated recipes that are sure to delight your taste buds. Whether you're looking for a quick snack or a sumptuous meal, we've got you covered.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/photo1.jpg" className="card-img-top" alt="Veg Recipes" />
              <div className="card-body">
                <h5 className="card-title">Veg Recipes</h5>
                <p className="card-text">
                  Dive into our delightful collection of vegetarian recipes, crafted to bring out the best in vegetables. From wholesome stews to refreshing salads, find your next favorite dish here!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/photo2.jpg" className="card-img-top" alt="Pulav" />
              <div className="card-body">
                <h5 className="card-title">Pulav</h5>
                <p className="card-text">
                  Experience the delightful flavors of India with our easy-to-make Veg Pulav recipe. This one-pot dish is a perfect blend of rice, vegetables, and aromatic spices, making it a wholesome meal for any occasion.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/photo3.jpg" className="card-img-top" alt="Puri Bhaji" />
              <div className="card-body">
                <h5 className="card-title">Puri Bhaji</h5>
                <p className="card-text">
                  Enjoy the delicious combination of crispy puris and flavorful bhaji with our easy-to-follow recipe. Perfect for breakfast, lunch, or dinner!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/sandwitch.jpg" className="card-img-top" alt="Sandwich" />
              <div className="card-body">
                <h5 className="card-title">Sandwich</h5>
                <p className="card-text">
                  Indulge in the simplicity and deliciousness of a classic sandwich with our easy-to-follow recipe. Perfect for a quick lunch or a satisfying snack!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/chhole bhature.jpg" className="card-img-top" alt="Chole Bhature" />
              <div className="card-body">
                <h5 className="card-title">Chole Bhature</h5>
                <p className="card-text">
                  Relish the rich and spicy flavors of Chole Bhature, a popular North Indian dish that pairs perfectly with fluffy, deep-fried bread. Perfect for a hearty meal!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/Pasta.jpg" className="card-img-top" alt="Pasta" />
              <div className="card-body">
                <h5 className="card-title">Pasta</h5>
                <p className="card-text">
                  Savor the taste of Italy with our classic pasta recipes. Whether you love creamy Alfredo or tangy marinara, we have something to delight your palate!
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/Biryani.jpg" className="card-img-top" alt="Biryani" />
              <div className="card-body">
                <h5 className="card-title">Biryani</h5>
                <p className="card-text">
                  Dive into the aromatic and flavorful world of Biryani, a quintessential Indian dish made with fragrant rice, tender meat or vegetables, and a blend of spices.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm custom-card">
              <img src="/salad.jpg" className="card-img-top" alt="Salad" />
              <div className="card-body">
                <h5 className="card-title">Salad</h5>
                <p className="card-text">
                  Refresh yourself with our vibrant salad recipes. From leafy greens to hearty grains, our salads are packed with nutrition and flavor!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
