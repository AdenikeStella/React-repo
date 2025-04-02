import './App.css';
import Footer from './Component/Footer';
import Intro1 from './Component/Intro1';
import Intro2 from './Component/Intro2';
import Intro3 from './Component/Intro3';
import Navbar from './Component/Navbar';
import Promo from './Component/Promo';
import Sidebar from './Component/Sidebar';
import Picture from './Component/Picture';
import Card from './Component/Card';



function App() { 

  return ( 
    <div className="App">

      <div>
        <Picture />
      </div>
      
    <div> 
      <Navbar />
      </div>

      <div className='mainPage'>
      <div>
        <Sidebar />
      </div>
      
      <div className='mainPage_2'>
      <div>
      <Promo heading = {data.heading} callToAction = {data.callToAction} />
      </div>

      

      <div>
      <Intro1 firstName="I'm Adenike, " accolades="I'm proud of myself at least! " />
      </div>

      <div>
      <Intro2 />
      </div>

      <div>
      <Intro3 />
      </div> 

      <div>
        <Card h2="The first card's h2" h3="The first card's h3" />
        <Card h2="The second card's h2" h3="The second card's h3"/>
        <Card h2="The third card's h2" h3="The third card's h3"/>
        </div>

      <div>
      <Footer />
    </div>
    </div>
    </div>
    </div> 
  ); 
} 
 
export default App;