import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {withRouter} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height:230,
    background:'white',
    boxShadow:'none',
    '&:hover': {
      background: "#f0f0f0",
   },
   padding: '12px 12px 12px 12px',
   borderBottom: '1px solid',
   borderRadius: '1px',
   cursor:'pointer'

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    textOverflow: 'ellipsis'
  },
  content: {
    flex: '1 0 auto',
    paddingTop: '0px',
    marginTop: '-6px'
  },
  cover: {
    width: 184,
    height:100
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

 function MediaControlCard(props) {
  
  const classes = useStyles();
  const theme = useTheme();
  const navigate=(index)=>{
    console.log(index)
    console.log(props.CardData[index]);
    props.history.push({
      pathname: '/details',
      state: {
        CardDatas: props.CardData,
        data:props.CardData[index]
      }
    })
  }
  return (
    <React.Fragment>
      {props.CardData.map((data,index)=>{
        return(
        <Card className={classes.root} onClick={()=>navigate(index)}>
        <div>  
          <CardMedia
          className={classes.cover}
          image={require('./../images/dollar.jpeg')}
          title="Live from space album cover"
        />
        </div>
        <div className={classes.details}>
          <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
              {data.heading}
            </Typography>
            <Typography component="h8" variant="h9" style={{color:'blue'}}>
              {data.subTitle}
            </Typography>
           <br/>
            <Typography component="h10" variant="h10">
            {data.description}
            </Typography>
            <br/>
            <Typography variant="subtitle1" color="textSecondary">
             {data.time}
            </Typography>    
           
          </CardContent>
        
        </div>
        </Card>
        )
      })
    }
     
     </React.Fragment>
    
  );
}
export default withRouter(MediaControlCard);