import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



const App: React.FC = () => {

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className='dark:bg-gradient-dark min-h-screen'>
      <div className='container mx-auto'>
        <Header />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App
