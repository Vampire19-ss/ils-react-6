

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home";
import Account from "./pages/Account";
import About from "./pages/About";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./pages/PageNotFound";
import Photos from "./pages/Photos";
import News from "./pages/News";
import "react-toastify/dist/ReactToastify.css";
import IsAuthorised from "./Auth/IsAuthorised";
import Dashboard from "./pages/Dashboard";




// funtion based  component

const App = () => {




  return (
    <>

      <ToastContainer/>

    
      
        <Navbar />

  
          <Routes>

            <Route path="*" element={<PageNotFound />} />
            <Route path="/" element={<Home  />} />
            <Route path="/about" element={<About  />} />
            <Route path="/user/account" element={<Account  />} />
            <Route path="/gallery" element={  <IsAuthorised><Photos/></IsAuthorised>  } />
            <Route path="/News" element={< News />} />
            <Route path="/user/dashboard" element={<IsAuthorised><Dashboard/></IsAuthorised>}/> 
          </Routes>
      

        <Footer />
    </>
  );
};

export default App;

//all done tntnatan most complex shit