import React from 'react'
import Ball from '/designs/socialmedia/ball.png'
import MovieNight from '/designs/socialmedia/movienight.png'
import PubQuiz from '/designs/socialmedia/pubquiz.png'

const SocialMedia = () => {
    return (
        <>
            <h1 className="mb flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
                Social Media Designs
            </h1>
            <p className='mb-3 text-xs text-center text-gray-500 dark:text-midgrey'>Some of the designs I've made for <span className='font-bold'>@au.indiansociety</span>, check them out! :)</p>
            <div className='w-fit lg:w-[80%] grid grid-cols-3 gap-5 md:gap-10 mb-10'>
                <img className='rounded-xl' src={Ball} alt={Ball} />
                <img className='rounded-xl' src={MovieNight} alt={MovieNight} />
                <img className='rounded-xl' src={PubQuiz} alt={PubQuiz} />
            </div>
        </>
    )
}

export default SocialMedia