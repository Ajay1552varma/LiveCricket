import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Mycard=()=> {
    function getmatchcard(){
        return(
            <Card>
                <CardContent>
                <Grid container justifyContent={'center'} spacing={4} alignItems={'center'}>
                    <Grid item>
                        <Typography variant='h5'>First Team</Typography>
                    </Grid>

                    <Grid item>
                         <img style={{width:85}} src={require("../images/vs.jpg")} alt="" />
                    </Grid>

                    <Grid item>
                        <Typography variant='h5'>Second Team</Typography>
                    </Grid>
                </Grid>
                </CardContent>
                <CardActions>
                    <Grid container justifyContent={'center'} spacing={3}>
                    <Button variant='contained' color='secondary'>Show Details</Button>
                    <Button variant='contained' color='secondary'>{new Date().toDateString()}s</Button>
                    </Grid>
                </CardActions>
               
            </Card>
        )
    }
  return getmatchcard();
}

export default Mycard