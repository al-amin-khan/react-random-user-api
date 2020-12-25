import RandomUser from './components/RandomUser/RandomUser';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from './components/Header/Header';


function App() {
  const [user, setUser] = useState([])
  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setUser(data.results))
  },[])
  return (
    <div>
      <Header></Header>
      <RandomUser user={user}></RandomUser>
    </div>
  );
}

export default App;
