import './App.css';
import Header from './Components/Frontend/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import Product from './Components/Frontend/Product';
import Customdevelopment from './Components/Frontend/Customdevelopment';
import Home from './Components/Frontend/Home';
import Footer from './Components/Frontend/Footer';
import Privacy from './Components/Frontend/Privacy';
import Terms from './Components/Frontend/Terms';
import Testimonial from './Components/Frontend/Testimonial';
import Contact from './Components/Frontend/Contact';
import Faq from './Components/Frontend/Faq';
import About from './Components/Frontend/About';
import WhmcsSetup from './Components/Frontend/WhmcsSetup';
import WhmcsCustomization from './Components/Frontend/WhmcsCustomization';
import WhmcsModulesDevelopment from './Components/Frontend/WhmcsModulesDevelopment';
import WhmcsCustomTheme from './Components/Frontend/WhmcsCustomTheme';
import WhmcsServerManagement from './Components/Frontend/WhmcsServerManagement';
import WhmcsThirdparty from './Components/Frontend/WhmcsThirdparty';
import Support from './Components/Frontend/Support';
import Sitemap from './Components/Frontend/Sitemap';

function App() {

  const serviceid = process.env.SERVICE_ID;
  const templateid = process.env.TEMPLATE_ID;
  const userid = process.env.USER_ID;

  const [progress, setProgress] = useState(0);


  return (
    <>
      <Router>
        <Header/>
        <LoadingBar color='#71d0f4' height={3} loaderSpeed={1500} waitingTime={1500} progress={progress} onLoaderFinished={() => setProgress(0)}/>
        <Routes>
          <Route exact path="/" element={<Home setProgress={setProgress} />} />
          <Route exact path="/whmcs-modules-themes" element={<Product setProgress={setProgress}/>} />
          <Route exact path="/custom-whmcs-development" element={<Customdevelopment setProgress={setProgress}/>} />
          <Route exact path="/privacy" element={<Privacy setProgress={setProgress}/>} />
          <Route exact path="/terms" element={<Terms setProgress={setProgress}/>} />
          <Route exact path="/testimonial" element={<Testimonial setProgress={setProgress}/>} />
          <Route exact path="/contact" element={<Contact setProgress={setProgress}/>} />
          <Route exact path="/faq" element={<Faq setProgress={setProgress}/>} />
          <Route exact path="/about" element={<About setProgress={setProgress}/>} />
          <Route exact path="/whmcs-setup" element={<WhmcsSetup setProgress={setProgress}/>} />
          <Route exact path="/whmcs-customization" element={<WhmcsCustomization setProgress={setProgress}/>} />
          <Route exact path="/whmcs-modules-development" element={<WhmcsModulesDevelopment setProgress={setProgress}/>} />
          <Route exact path="/whmcs-custom-theme-development" element={<WhmcsCustomTheme setProgress={setProgress}/>} />
          <Route exact path="/server-management-services" element={<WhmcsServerManagement setProgress={setProgress}/>} />
          <Route exact path="/third-party-api-integration" element={<WhmcsThirdparty setProgress={setProgress}/>} />
          <Route exact path="/support" element={<Support setProgress={setProgress}/>} />
          <Route exact path="/sitemap" element={<Sitemap setProgress={setProgress}/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
