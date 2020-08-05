import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom'
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

 function ElevateAppBar(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar style={{background:'#323b40'}}>
          <Toolbar>
          <Button style={{color:'white',marginLeft:'53px'}} onClick={()=>{props.history.push('/')}}>Dashboard</Button>
          <Button style={{color:'white',marginLeft:'53px'}} onClick={()=>{props.history.push('/')}}>Menu</Button>
          <Button style={{color:'white',marginLeft:'53px'}} onClick={()=>{props.history.push('/')}}>Research</Button>
          <Button style={{color:'white',marginLeft:'53px'}} onClick={()=>{props.history.push('/')}}>Market Details</Button>
          <Button style={{color:'white',marginLeft:'53px'}} onClick={()=>{props.history.push('/')}}>Industry</Button>
          <Button style={{color:'white',marginLeft:'53px'}} onClick={()=>{props.history.push('/')}}>ESG</Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
export default withRouter(ElevateAppBar);