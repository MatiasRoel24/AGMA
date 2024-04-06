"use client";
import { Hero } from './Hero'
import animate from '../media/animate.json'
import Lottie from 'lottie-react'
import { ButtonMoving } from './ButtonMoving';

export const MainContent = () => {
    return (
        <div className='bg-neutral-900 flex flex-col lg:flex-row items-center h-[120vh] md:h-screen w-full h-screen justify-center content-center'>
            <div className='h-40 flex flex-col gap-16 justify-center content-start items-center'>
                <Hero />
                <ButtonMoving />
            </div>
            <div >
                <Lottie animationData={animate} loop={true} />
            </div>
        </div>
    )
}

