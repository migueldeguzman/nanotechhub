import React from 'react';
import logo from '../logo.svg';

const Page2 = ({ onRouteChange }) => {
	return (
		<div className="App">
			<header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">NanotechHub</h1>
        	</header>
	 		<button onClick={ () => onRouteChange('page1') }>Home</button>
        	<button className="disabled">Resources</button>
	 		<button onClick={ () => onRouteChange('page3') }>About</button>
	 		<div>
	 			<h3><a href="https://www.youtube.com/watch?v=XZfUJuSmBAs">Biotechnology/Nanotechnology | Andrew Hessel | SingularityU Germany Summit 2017</a></h3>
	 		</div>	
		</div>
	)
}

export default Page2;