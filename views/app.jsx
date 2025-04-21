// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import SaleSection from './components/SaleSection';
// import BestsellersSection from './components/BestsellersSection';
// import WelcomeSection from './components/WelcomeSection';
// import Footer from './components/Footer';
// import CategoryPage from './pages/CategoryPage';
// import WomenPage from './pages/WomenPage';
// import Login from './pages/login'; // Add this import
// import Signup from "./pages/Signup";
// import WomenProductsPage from './pages/WomenProductsPage';
// import LookbookSection from './components/LookbookSection';
// import WomenHeroSection from './components/WomenHeroSection';
// import RecentProducts from './components/RecentProducts';
// const App = () => {
//   return (
//     <div
//       style={{
//         textAlign: 'center',
//         backgroundColor: '#ffffff',
//         minHeight: '100vh',
//         display: 'flex',
//         flexDirection: 'column',
//       }}
//     >
//       <Header />
//       <main style={{ flex: 1 }}>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <HeroSection />
//                 <SaleSection />
//                 <BestsellersSection />
//                 <WelcomeSection />
//                 {/* <LookbookSection />
//                 <WomenHeroSection />
//                 <RecentProducts /> */}
//               </>
//             }
//           />
//           <Route path="/shop/:categoryName" element={<CategoryPage />} />
//           <Route path="/login" element={<Login />} /> {/* Add this new route */}
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/women" element={<WomenPage />} />
//           <Route path="/women-product" element={<WomenProductsPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SaleSection from './components/SaleSection';
import BestsellersSection from './components/BestsellersSection';
import WelcomeSection from './components/WelcomeSection';
import Footer from './components/Footer';
import CategoryPage from './pages/CategoryPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About'; // ✅ Import About page
import Blog from './pages/Blog'; // ✅ Import Blog page
import BlogDetail from './pages/BlogDetail';
import WomenPage from './pages/WomenPage';
import Contact from './pages/Contact';
import JewelryPage from './pages/Jewelry';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { AuthProvider } from './context/AuthContext'; // ✅ Import AuthProvider



const App = () => {
  return (
    <AuthProvider> {/* ✅ Wrap with AuthProvider */}
      <CartProvider>
        <ToastProvider>
          <div
            style={{
              textAlign: 'center',
              backgroundColor: '#ffffff',
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header />
            <main style={{ flex: 1 }}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <HeroSection />
                      <SaleSection />
                      <BestsellersSection />
                      <WelcomeSection />
                    </>
                  }
                />
                <Route path="/shop/:categoryName" element={<CategoryPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} /> {/* ✅ Add About route */}
                <Route path="/blog" element={<Blog />} /> {/* ✅ Add Blog route */}
                <Route path="/blog/:id" element={<BlogDetail />} /> {/* ✅ Add BlogDetail route */}
                <Route path ="/jewelry" element={<JewelryPage />} /> {/* ✅ Add Jewelry route */}
                <Route path="/contact" element={<Contact />} /> {/* ✅ Add Contact route */}  
                {/* Add other routes as needed */}
              </Routes>
            </main>
            <Footer />
          </div>
        </ToastProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
