import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'
import { Autoplay, FreeMode } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { services } from '../data'
import { fadeIn } from '../variants'
const Works = () => {
	const [ref] = useInView({
		threshold: 0.5,
	})
	return (
		<section id='works' ref={ref} className='py-[80px]'>
			<div className='container mx-auto px-[20px] md:py-[40px] border-b'>
				<div className='pb-20'>
					<motion.h1
						variants={fadeIn('down', 0.4)}
						initial='hidden'
						whileInView={'show'}
						viewport={{ once: false, amount: 0.5 }}
						className='font-semibold font-serif text-[46px] text-[#21243D]'
					>
						My Latest Projects
					</motion.h1>
				</div>
				<motion.div
					variants={fadeIn('down', 0.5)}
					initial='hidden'
					whileInView={'show'}
				>
					<Swiper
						loop
						modules={[FreeMode, Autoplay]}
						height={350}
						spaceBetween={50}
						slidesPerView={3.5}
						freeMode={true}
						autoplay={{
							delay: 1000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
						}}
						breakpoints={{
							350: {
								width: 450,
								slidesPerView: 1.5,
							},
							450: {
								width: 576,
								slidesPerView: 1.5,
							},
							576: {
								width: 950,
								slidesPerView: 2.5,
							},
							950: {
								width: 1280,
								slidesPerView: 3,
							},
							1280: {
								width: 1340,
								slidesPerView: 3.5,
							},
						}}
						className='mySwiper'
					>
						{services.map((servce, i) => {
							const { name, description, link, vercel, github, img } = servce
							return (
								<SwiperSlide>
									<div className='group h-[300px] max-w-[550px] relative overflow-hidden  border border-gray-500  rounded-xl'>
										<div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 cursor-pointer'></div>

										<img
											className='h-full group-hover:scale-125 transition-all duration-300 w-full bg-cover '
											src={img}
											alt='project-photo'
										/>

										<div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
											<span className='bg-gradient-to-r text-transparent bg-clip-text from-[#42A6E3] to-[#FF56F6] font-bold font-primary hover:from-[#FF56F6] hover:to-[#42A6E3]   font-serif text-lg'>
												<a
													href={github}
													target='_blank'
													rel='noopener noreferrer'
												>
													{name} | github
												</a>
											</span>
										</div>
										{/* title */}
										<div className='absolute -bottom-full left-12 group-hover:bottom-14 transiton-all duration-700 z-50'>
											<span className='text-3xl text-white'>
												<a
													href={vercel}
													target='_blank'
													rel='noopener noreferrer'
												>
													{name}
												</a>
											</span>
										</div>
									</div>
								</SwiperSlide>
							)
						})}
					</Swiper>
				</motion.div>
			</div>
		</section>
	)
}

export default Works
