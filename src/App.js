import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Navbar from './comp/Navbar';
import Home from './comp/Home';
import Footer from './comp/Footer';

function App() {
  const [data, setdata] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://hodlinfo-backend-ueyj.onrender.com/list')
        .then(res => 
          {
            setdata(res.data)
          })
        .catch(err => console.log(err))
    }
    fetchData()
  }, [])
  return (
    <>
      <Navbar/>
      <Home data={data}/>
      <Footer/>
    </>
  );
}

export default App;
