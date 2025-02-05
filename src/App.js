

import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navigation from './components/NavigationBar';
import SuperHero from './components/Superhero';
import Trending from './components/Tranding';
import"./style/landingPage.css"

function App() {
  return (
    <div>
      {/* Intro section */}
     <div className='myBG'>
      <Navigation/>
      <Intro/>
    </div>
    {/* end intro */}
    
    {/* trending section */}
    <div className='trending'>
      <Trending/>
    </div>
    {/* end trrending section */}

    <div className='superhero'>
      <SuperHero/>
    </div>

    <div className='footer'>
      <Footer/>
    </div>

    </div>
  
    
  );
}

export default App;
