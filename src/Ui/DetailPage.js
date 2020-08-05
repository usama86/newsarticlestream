import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


import Cards from './../Components/Cards';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {cardData} from './../JsonData/CardsData';
import CardMedia from '@material-ui/core/CardMedia';
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

export default function DetailPage(props) {
    console.log(props)
  const [cardDatas,setCardDatas] =React.useState({}); 
  React.useEffect(()=>{
    if(props.location && props.location.state && props.location.state.data)
        setCardDatas(props.location.state.data);
    else 
        setCardDatas(cardData[0]);    

  },[])
  const classes = useStyles();

  return (
    <div className={classes.root}>    
    <Grid container style={{background:'#f7f7f5'}}>
        
                <Grid item xs={6} style={{marginLeft:'15px'}}>
                    <Grid item xs={12} style={{marginTop:'4%'}}>
                        <Typography component="h5" variant="h5" >
                        {cardDatas.heading}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'4%'}}>
                        <Typography component="h6" variant="h6" >
                        {cardDatas.time}
                    </Typography>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'4%'}}>
                    <Typography component="h7" variant="h7" >
                        BY <span style={{color:'#3794bf'}}>{cardDatas.name}</span>
                    </Typography>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'4%'}}>
                        <CardMedia
                            style={{width:'617px',height:'295px',objectFit:'cover'}}
                            image={require('./../images/dollar.jpeg')}
                            title="Live from space album cover"
                        />
                    </Grid>
                    <Grid item xs={11} style={{marginTop:'4%'}}>
                    <Typography component="h7" variant="h7" >
                        {cardDatas.description}
                    </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6} style={{
                    maxHeight: '548px',
                    overflowY: 'scroll',
                    position: 'fixed',
                    left: '687px',
                    top: '66px'
                }}>
                    <Grid item xs={12} style={{marginTop:'4%'}}>
                        <Typography component="h6" variant="h6" >
                        Top News
                    </Typography>
                    </Grid>
                    <Grid item xs={12} style={{marginTop:'4%',position:'sticky'}}>
                    <Cards CardData={cardData}/>
                    </Grid>
                </Grid>
      
    </Grid>
    </div>
  );
}
