import './App.scss'
import Hero from './Components/Hero';
import Store from './Components/Store';
import BusinessPlan from './Components/BusinessPlan';
import MarketExp from './Components/MarketExp';
import MobileApp from './Components/MobileApp';
import Footer from './Components/Footer';
function App() {
  // useEffect(() =>{
  //   AOS.init();
  //   AOS.refresh();
  // },[]);
  return (
    <div className="App">
      <Hero/>
      <Store/>
      <BusinessPlan/>
      <MarketExp/>
      <MobileApp/>
      <Footer/>
    </div>
  );
}

export default App;
