import React from 'react';
import logo from '../logo.svg';

const Home = ({ onRouteChange }) => {
	return (
		<div className="App">
			<header className="App-header">
	          <img src={logo} className="App-logo" alt="logo" />
	          <h1 className="App-title">NanotechHub</h1>
	        </header>
	        <button className="disabled">Home</button>
		 	<button onClick={ () => onRouteChange('page2') }>Resources</button>
		 	<button onClick={ () => onRouteChange('page3') }>About</button>
		 	<h3>“Right now, and for the first time ever, a passionate and committed individual has access to the technology, minds, and capital required to take on any challenge.”</h3>
			<h3><a href="https://www.google.com.ph/search?rlz=1C1CHBF_enPH738PH738&ei=rne5W-vZEMqkaeSohegJ&q=peter+diamandis&oq=peter+diamandis&gs_l=psy-ab.3..35i39k1l2j0i67k1l2j0l6.1562.3209.0.3484.7.7.0.0.0.0.255.864.0j1j3.4.0....0...1c.1.64.psy-ab..4.3.672...0i22i30k1.0.ObglHbhTYUc">―Dr. Peter H. Diamandis</a></h3>
		</div>
	)
}

export default Home;