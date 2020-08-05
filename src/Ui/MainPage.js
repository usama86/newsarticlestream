import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Cards from './../Components/Cards';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {cardData} from './../JsonData/CardsData';
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container style={{background:'#f7f7f5'}}>
            <Container maxWidth="sm" style={{marginLeft:'0px',marginRight:'0px'}}>
                <Grid item xs={12} style={{marginTop:'4%'}}>
                    <Typography component="h6" variant="h6" >
                    Top News
                </Typography>
                </Grid>
                <Grid item xs={12} style={{marginTop:'4%'}}>
                <Cards CardData={cardData}/>
                </Grid>
            </Container>
      
    </Grid>
    </div>
  );
}
