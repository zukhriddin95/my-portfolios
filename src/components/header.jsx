import { Sling as Hamburger } from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import Logo from '../assets/logo.png'
const Header = () => {
	const [isScrollY, setIsScrollY] = useState(false)
	const [matches, setMatches] = useState(window.innerWidth >= 768)

	const [isOpen, setOpen] = useState(false)
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrollY(true)
			} else {
				setIsScrollY(false)
			}
		}

		window.addEventListener('scroll', () => handleScroll())

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const updateMatches = () => {
			setMatches(window.innerWidth >= 768)
		}

		window.addEventListener('resize', updateMatches)

		return () => {
			window.removeEventListener('resize', updateMatches)
		}
	}, [])

	return (
		<header
			className={`sticky top-0 bg-white transition-all ease-in-out	 ${
				isScrollY && ' border-b shadow z-10'
			} `}
		>
			<div className='container mx-auto'>
				<div className='flex items-center justify-between px-[20px]'>
					<div className='w-[80px] flex items-center'>
						<img src={Logo} alt='logo' className='w-full' />
					</div>
					{matches ? (
						<nav className='flex items-center gap-5 '>
							<Link
								to='home'
								activeClass='active'
								smooth={true}
								spy={true}
								offset={-200}
								className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:border-[#353558] transition-all border-b'
							>
								Home
							</Link>
							<Link
								to='about'
								activeClass='active'
								smooth={true}
								spy={true}
								offset={-200}
								className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:border-[#353558] transition-all border-b'
							>
								about
							</Link>
							<Link
								to='works'
								activeClass='active'
								smooth={true}
								spy={true}
								offset={-200}
								className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:border-[#353558] transition-all border-b'
							>
								works
							</Link>
							<Link
								to='contact'
								activeClass='active'
								smooth={true}
								spy={true}
								offset={-200}
								className='cursor-pointer hover:text-[rgb(53,53,88)] hover:font-semibold hover:border-[#353558] transition-all border-b'
							>
								contact
							</Link>
						</nav>
					) : (
						<Hamburger
							label='Show menu'
							direction='right'
							duration={0.8}
							rounded
							toggled={isOpen}
							toggle={setOpen}
						/>
					)}
					{isOpen && (
						<div className='absolute  right-2 top-[80px] w-[120px] h-[20%] bg-white'>
							<nav className='flex flex-col bg-slate-200 p-6 rounded-md gap-5 '>
								<Link
									onClick={() => setOpen(false)}
									to='home'
									activeClass='active'
									smooth={true}
									spy={true}
									offset={-200}
									className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:pl-2 transition-all border-b'
								>
									Home
								</Link>
								<Link
									onClick={() => setOpen(false)}
									to='about'
									activeClass='active'
									smooth={true}
									spy={true}
									offset={-200}
									className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:pl-2 transition-all border-b'
								>
									about
								</Link>
								<Link
									onClick={() => setOpen(false)}
									to='works'
									activeClass='active'
									smooth={true}
									spy={true}
									offset={-200}
									className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:pl-2 transition-all border-b'
								>
									works
								</Link>
								<Link
									onClick={() => setOpen(false)}
									to='contact'
									activeClass='active'
									smooth={true}
									spy={true}
									offset={-200}
									className='cursor-pointer hover:text-[#353558] hover:font-semibold hover:pl-2 transition-all border-b'
								>
									contact
								</Link>
							</nav>
						</div>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
