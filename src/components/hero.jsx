import { motion } from 'framer-motion'
import React from 'react'
import { BsGithub, BsInstagram } from 'react-icons/bs'
import { ImTelegram } from 'react-icons/im'
import { useInView } from 'react-intersection-observer'
import { TypeAnimation } from 'react-type-animation'
import { fadeIn } from '../variants'

import Photo from '../assets/Rasm.jpg'
import Resume from '../assets/resume.pdf'
const Hero = () => {
	fetch('https://dummyjson.com/products')
		.then(res => res.json())
		.then(json => console.log(json))

	const [ref, inView] = useInView({
		threshold: 0.5,
	})
	return (
		<section ref={ref} id='home' className=''>
			<div className='container mx-auto px-[20px] lg:px-[40px] '>
				<div className='flex flex-col md:flex-row items-center md:justify-between gap-28 md:gap-4 border-b pb-[60px]'>
					<div className='mt-[100px] flex flex-col gap-3'>
						<motion.h1
							variants={fadeIn('up', 0.3)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='font-semibold font-serif text-[46px] text-[#21243D]'
						>
							Zukhriddin Nurmatov{' '}
						</motion.h1>
						<div>
							<motion.div
								variants={fadeIn('up', 0.2)}
								initial='hidden'
								whileInView={'show'}
								viewport={{ once: false, amount: 0.7 }}
								className='h-[80px] sm:h-auto'
							>
								<span className='font-bold mr-4 text-[25px] text-[#21243D]'>
									I am a{' '}
								</span>
								<TypeAnimation
									style={{
										color: '#FE6464',
										fontWeight: 'bold',
										fontSize: '25px',
									}}
									sequence={[
										'Frontend Developer !',
										2000,
										'Passionate about creating !',
										2000,
										'responsive and user-friendly !',
										2000,
										'web experiences !',
										2000,
										'',
										2000,
									]}
									speed={50}
									className='text-accent'
									wrapper='span'
									repeat={Infinity}
								/>
							</motion.div>
						</div>
						<motion.p
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className=' mb-8 max-w-lg text-[#21243D] mx-auto lg:mx-0'
						>
							I’m a frontend developer.I started learning programming in 2020. I
							work with technologies: HTML, Css, Scss, Bootstrap, Material UI,
							Ant design, Tailwind.css, Javascript, React, Redux, TypeScript,
							NextJs.
						</motion.p>
						<motion.button
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='btn btn-lg flex items-start w-[170px] px-3 py-2 border rounded-md bg-[#FE6464] text-white'
						>
							<a href={Resume} download='resume'>
								Dowland Resume
							</a>
						</motion.button>
						<motion.div
							variants={fadeIn('up', 0.2)}
							initial='hidden'
							whileInView={'show'}
							viewport={{ once: false, amount: 0.7 }}
							className='flex items-center gap-6 mt-6'
						>
							<a
								href='https://github.com/zukhriddin95'
								target='_blank'
								rel='noreferrer'
							>
								<BsGithub className='text-[25px] duration-150 hover:scale-125' />
							</a>
							<a
								href='https://t.me/Zukhriddin0095'
								target='_blank'
								rel='noreferrer'
							>
								<ImTelegram className='text-[25px] text-blue-600 duration-150 hover:scale-125 ' />
							</a>
							<a
								href='https://www.instagram.com/zukhriddin0095'
								target='_blank'
								rel='noreferrer'
							>
								<BsInstagram className='text-[25px] text-red-500 duration-150 hover:scale-125' />
							</a>
						</motion.div>
					</div>

					<motion.div
						variants={fadeIn('down', 0.5)}
						initial='hidden'
						whileInView={'show'}
						className='p-0 overflow-hidden border-[10px] rounded-[30%] sm:rounded-[50%] h-[350px] max-w-[350px] relative lg:right-[150px] lg:top-[60px]'
					>
						<img src={Photo} alt='avatar' />
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default Hero
