import React from 'react';
import HoverBox from '../components/HoverBox'; // Adjust the import path as needed
import Intro from '../components/Intro';

const Home: React.FC = () => {
    return (
        <div className='container mx-auto max-w-[70vw] pt-5 px-5 md:px-10 xl:px-20'>
            <div className='grid gap-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-8'>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-6 rounded-xl bg-red-300 h-60'><Intro /></HoverBox>
                    <HoverBox className='col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Location</HoverBox>
                    <HoverBox className='col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>About Me</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-xl bg-red-300 h-60'>Projects</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Spotify</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>2 Truths 1 Lie</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-xl bg-red-300 h-60'>Graphic Designs</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Hobbies</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Blog</HoverBox>
                    <HoverBox className='col-span-1 hidden lg:flex md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>GitHub</HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-xl bg-red-300 h-60'>Submit Form</HoverBox>
                </div>
            </div>
        </div>
    );
};

export default Home;
