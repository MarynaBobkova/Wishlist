import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import Home from "./pages/Home";
import CreateWishlist from './pages/CreateWishlist';
import CreateGift from './pages/CreateGift';
import { PrivacyPolicy } from './pages/PrivacyPolicy'
import NavBar from './components/navbar/NavBar';
import "./App.css";
import AuthForm from './components/Auth/AuthForm'; 
import SignUpPage from './components/SignUp/SignUpPage';
import About from './pages/About';
import Wishlist from "./pages/Wishlist";
import AccountPage from "./pages/Account/AccountPage";



const App: React.FC = () => {
   
console.log("Hello")
    return (
        <div className='App'>
           <Router>              
                <ScrollToTop />
                <NavBar />            
                <Routes>                 
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/login" element={<AuthForm />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/createWishlist" element={<CreateWishlist />} />                 
                    <Route path="/createGift" element={<CreateGift />} />
                    <Route path="/dashboard" element={<AccountPage />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                    <Route path="/signup" element={<SignUpPage />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
