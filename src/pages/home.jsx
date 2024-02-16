import React, { Fragment } from 'react'
import AnimateCursor from '../animation/animationCursor'
import About from '../components/about'
import Contact from '../components/contact'
import Hero from '../components/hero'
import Works from '../components/works'

const Home = () => {
	return (
		<Fragment>
			<AnimateCursor />
			<Hero />
			<About />
			<Works />
			<Contact />
		</Fragment>
	)
}

export default Home
