import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

import './App.css'

//2378662675314faaa2b3dd1b9a316108
const App = () => {
 
  const[news, setNews] = useState([]);

  const filterNews = async(category) => {
    let link = "";

    if (category && category !== "everything"){
      link = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=2378662675314faaa2b3dd1b9a316108`;
    } else{
      link = "https://newsapi.org/v2/everything?q=keyword&apiKey=2378662675314faaa2b3dd1b9a316108";
    }

    const {data} = await axios.get(link);
    setNews(data.articles);
  }

  useEffect(() => {
    filterNews()
  }, [])
  return (
    <>
     <Navbar filterNews={filterNews}/>
     <Home news={news}/>
     <Footer />
    </>
  )
}

export default App