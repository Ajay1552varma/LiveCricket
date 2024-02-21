import './App.css';
import Navbar from './components/Navbar';
import {Api} from './api/Api';
import { useEffect,useState} from 'react';
import Mycard from './components/Mycard';
import { Grid } from '@mui/material'

function App() {

  const [matches,setMatches]=useState([]);

  useEffect(()=>{
    Api().then((res)=>{
     setMatches(res.data)
     console.log(res.data);
    })
    .catch((error)=>{
      console.log("Error is:",error); 
    })
  },[])

  return (
    <div className="App">
      <Navbar/>
      <h1>Hello Welcome In Live Score Application</h1>
    

      <Grid container>
        <Grid sm="2">

        </Grid>
        <Grid sm="8">
        {
        matches.map((match)=>(
          <Mycard match={match}/>
        ))
       }
        </Grid>
      </Grid>

       
    
    </div>
  );
}

export default App;
