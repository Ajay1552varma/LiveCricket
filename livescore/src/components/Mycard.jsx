import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import AlertDialog from './DialogBox';

const Mycard=({match})=> {

    function handleCLick(id){
       console.warn("The ID is:",id);
    }

    function getmatchcard(){
        return(
            <Card style={{marginTop:20}}>
                <CardContent>
                <Grid container justifyContent={'center'} spacing={4} alignItems={'center'}>
                    <Grid item>
                        <Typography variant='h5'>{match.teams[0]}</Typography>
                    </Grid>

                    <Grid item>
                         <img style={{width:85}} src={require("../images/vs.jpg")} alt="" />
                    </Grid>

                    <Grid item>
                        <Typography variant='h5'>{match.teams[1]}</Typography>
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent={'center'} spacing={3}>

                    <Button onClick={()=>handleCLick(match.id)} variant='contained' color='secondary'>
                        <AlertDialog match={match}/>
                    </Button>

                    <Button style={{marginLeft:10}} variant='contained' color='secondary'>Start Time:{new Date (match.dateTimeGMT).toLocaleString()}</Button>
                    </Grid>
                </CardActions>
               
            </Card>
        )
    }
  return getmatchcard();
}

export default Mycard;