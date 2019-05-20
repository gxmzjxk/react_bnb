import React from 'react';
import { HomeHeader } from './header';
import { HomeNav } from './nav';
import { Focus } from '../../../components/focus';

const SportsHomePage = () => {
	return (
		<div className="home-page">
			<HomeHeader />
			<HomeNav />
			<Focus />
		</div>
	);
}

export default SportsHomePage;
