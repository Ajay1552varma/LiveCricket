import './App.css';
import Navbar from './components/Navbar';
import {Api} from './api/Api';
import { useEffect } from 'react';
import Mycard from './components/Mycard';

function App() {

  //const [matches,setMatches]=useState([]);

  useEffect(()=>{
    Api().then((data)=>{
     // setMatches(data.matches)
     console.log(data);
    })
    .catch((error)=>{
      console.log("Error is:",error);
    })
  },[])

  return (
    <div className="App">
      <Navbar/>
      <h1>Hello Welcome In Live Score Application</h1>
    
     <Mycard/>
    
    </div>
  );
}

export default App;
