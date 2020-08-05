import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from './Ui/MainPage';
import DetailPage from './Ui/DetailPage'
import Grid from '@material-ui/core/Grid';
import Header from './Components/Header';
const App=()=> {
	return (
		<React.Fragment>
			<Grid container>       
			<Grid item xs={12}>
            	<Header/>
            </Grid>
			</Grid>
			
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route exact path="/details" component={DetailPage} />
					{/* <Route
					 path="/patientRegistration" component={PatientRegistration} /> */}
					 {/* <Route 
					 path="/part2" component={PRPart2} />
					  */}
				</Switch>
		</React.Fragment>
	);
}

export default App;
