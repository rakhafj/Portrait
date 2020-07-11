import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
import Home from './components/home/Home';
import Collection from './components/collection/Collection'
import { Navbar, Footer } from './components/layouts';


// Main Route dari aplikasi
class App extends Component {
	render() {
		return (
			<>
				<Router> 
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/collection" component={Collection} />
					</Switch>
					<Footer />
				</Router>
			</>
		);
	}
}

export default App;
