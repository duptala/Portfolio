import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/Home/ScrollToTop';



const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // always default to dark mode

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else if (storedTheme === 'light') {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark'); // Default to dark mode
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <div className='bg-gradient-light dark:bg-gradient-dark min-h-screen'>
      <ScrollToTop />
      <div className='container mx-auto pb-10'>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className='min-h-screen'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default App
