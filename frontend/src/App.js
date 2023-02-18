
import { useMemo, useState,useEffect } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Header from './Components/Header/Header';
import TopNav from './Components/Header/TopNav';
import Routers from './MainRouter/Routers';
import { UserContext } from './Static/userContext';
function App() {
  const [user,setUser]=useState(null)
  const value = useMemo(()=>({user,setUser}),[user,setUser])
  useEffect(() => {
      const dataStr = localStorage.getItem('Authinfo');
      if(dataStr){
        console.log("from local storage",JSON.parse(dataStr))
        setUser(JSON.parse(dataStr))
      }
}, [])
  return (
    <div className="App">
       
        
    <UserContext.Provider value={value}>
        <Routers/>
    </UserContext.Provider>

     
      
     
    </div>
  );
}

export default App;
