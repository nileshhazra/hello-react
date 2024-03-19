import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element
// const heading = <h3 className='heading'>hello react</h3>;

// // React functional component
// const Title = () => (
//     <h2 className='title'>this is a title</h2>
// );
// // component composition
// const HeadingComponent = () => (
//     <div id='container'>
//         {Title()}
//         {heading}
//         <h1 className='heading'>hello react functional component</h1>
//     </div>
// );

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://companieslogo.com/img/orig/swiggy-893aaf3b.png?t=1699336580'
          alt='logo '
        />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>About us</a>
          </li>
          <li>
            <a href='#'>Contact us</a>
          </li>
          <li>
            <a href='#'>Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resName, cuisine, img } = props;
  return (
    <div className='restaurant-card'>
      <img src={img} alt='' className='res-img' />
      <h3 className='res-name'>{resName}</h3>
      <p className='res-desc'>{cuisine}</p>
      <p className='res-rating'>⭐⭐⭐⭐</p>
      <p className='offer'>60% off</p>
    </div>
  );
};

const Body = () => {
  return (
    <div className='body'>
      <div type='text' className='search'>
        Search restaurants, bakery, grocery, etc
      </div>
      <div className='restaurant-container'>
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
        <RestaurantCard
          resName='Burger King'
          cuisine='Burgers, American'
          img='https://static.vecteezy.com/system/resources/previews/021/952/575/non_2x/free-tasty-hamburger-on-transparent-background-free-png.png'
        />
        <RestaurantCard
          resName='Keventers'
          cuisine='Milkshakes, Beverages'
          img='https://static.vecteezy.com/system/resources/thumbnails/024/041/488/small_2x/3d-render-glass-of-strawberry-milkshake-with-straw-element-png.png'
        />
      </div>
    </div>
  );
};
const App = () => {
  return (
    <div className='app'>
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
