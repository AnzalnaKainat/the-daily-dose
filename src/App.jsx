// import React, { useState, useEffect } from 'react'
// import axios from 'axios'

// import Navbar from './components/Navbar'
// import Home from './components/Home'
// import Footer from './components/Footer'

// import './App.css'

// //2378662675314faaa2b3dd1b9a316108
// const App = () => {
 
//   const[news, setNews] = useState([]);

//   const filterNews = async(category) => {
//     let link = "";

//     if (category && category !== "everything"){
//       link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2378662675314faaa2b3dd1b9a316108`;
//     } else{
//       link = "https://newsapi.org/v2/everything?q=keyword&apiKey=2378662675314faaa2b3dd1b9a316108";
//     }

//     const {data} = await axios.get(link);
//     setNews(data.articles);
//   }

//   useEffect(() => {
//     filterNews()
//   }, [])
//   return (
//     <>
//      <Navbar filterNews={filterNews}/>
//      <Home news={news}/>
//      <Footer />
//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

import './App.css';

const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us');

  const filterNews = async (category = 'everything', selectedCountry = country) => {
    let link = category && category !== 'everything'
      ? `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&category=${category}&apiKey=${API_KEY}`
      : `https://newsapi.org/v2/top-headlines?country=${selectedCountry}&apiKey=${API_KEY}`;

    try {
      const { data } = await axios.get(link);
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const filterCountry = (selectedCountry) => {
    setCountry(selectedCountry);
    filterNews('everything', selectedCountry);
  };

  useEffect(() => {
    filterNews();
  }, [country]);

  return (
    <>
      <Navbar filterNews={filterNews} filterCountry={filterCountry} />
      <Home news={news} />
      <Footer />
    </>
  );
};

export default App;
