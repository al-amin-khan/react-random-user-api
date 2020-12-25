import RandomUser from './components/RandomUser/RandomUser';
import { useEffect } from 'react';
import { useState } from 'react';


function App() {
  const [user, setUser] = useState([])
  useEffect( () =>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => setUser(data.results))
  },[])
  return (
    <RandomUser user={user}></RandomUser>
  );
}

export default App;
