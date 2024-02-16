import { motion } from 'framer-motion'
import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi'
import { FaGithub } from 'react-icons/fa6'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { SiAxios, SiJavascript, SiReact, SiRedux } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { useInView } from 'react-intersection-observer'
import Resume from '../assets/resume.pdf'
import { fadeIn } from '../variants'

const About = () => {
	const [ref, inView] = useInView({
		threshold: 0.5,
	})
	return (
		<section id='about' ref={ref} className='bg-[#EDF7FA] mt-[30px] py-[30px]'>
			<div className='container mx-auto px-[20px] lg:p-[40px]'>
				<div className='flex flex-col md:flex-row gap-10 lg:gap-0 justify-between'>
					<motion.div
						variants={fadeIn('down', 0.4)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.5 }}
						className='flex flex-col  gap-6 '
					>
						<h1 className='text-[40px] font-serif font-semibold text-[#21243D]'>
							ABOUT ME
						</h1>
						<h3 className='text-[25px] font-sans font-semibold text-[#21243D] max-w-[500px]'>
							I'm a Freelance Front-end Developer with over 1 years of
							Experience
						</h3>
						<p className='text-[18px] font-sans font-semibold text-[#21243D] max-w-[500px]'>
							I am dedicated to staying up-to-date with the latest developments
							in the ever evolving frontend landscape. Continuous learning is
							not just a habit but a lifestyle for me.
						</p>
						<div>
							<button className='btn btn-lg flex items-start w-[170px] px-3 py-2 border rounded-md bg-[#FE6464] text-white'>
								<a href={Resume} download='resume'>
									Dowland Resume
								</a>
							</button>
						</div>
					</motion.div>
					<motion.div
						variants={fadeIn('up', 0.4)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.5 }}
						className='flex flex-col gap-6 items-center'
					>
						<h1 className='text-[40px] font-serif font-semibold text-[#21243D]'>
							TECHNICAL SKILLS
						</h1>
						<div className='flex items-center gap-[50px]'>
							<ImHtmlFive className='text-[55px] text-pink-500' />
							<IoLogoCss3 className='text-[65px] text-blue-400' />
							<SiJavascript className='text-[55px] text-yellow-400 rounded' />
						</div>
						<div className='flex items-center gap-[50px]'>
							<SiReact className='text-[55px] text-blue-500' />
							<SiRedux className='text-[65px] text-blue-500' />
							<SiAxios className='text-[55px] text-blue-400 rounded' />
						</div>
						<div className='flex items-center gap-[50px]'>
							<BiLogoTypescript className='text-[55px] text-blue-500' />
							<TbBrandNextjs className='text-[65px] text-black' />
							<FaGithub className='text-[55px] text-black rounded' />
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default About
