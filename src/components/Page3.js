import React from 'react';
import logo from '../logo.svg';

const Page3 = ({ onRouteChange }) => {
	return (
		<div className="App">
			<header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">NanotechHub</h1>
	 		</header>
	 		<button onClick={ () => onRouteChange('page1') }>Home</button>
	 		<button onClick={ () => onRouteChange('page2') }>Resources</button>
	 		<button className="disabled">About</button>
	 		<h4>The best resource for biotechnology and nanotechnology.</h4>
	 		<h4>For more projects! please visit my website: <a href='https://migueldeguzman.github.io'>https://migueldeguzman.github.io</a> </h4>
		</div>
	)
}
export default Page3;