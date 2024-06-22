import React from 'react';
import HoverBox from '../components/HoverBox'; // Adjust the import path as needed
import Intro from '../components/Intro';

const Home: React.FC = () => {
    return (
        // <div className='bg-red-200'>
        //     <div className='container mx-auto p-5 md:px-20 xl:px-40 sm:px-10'>
        //         <div className='grid gap-8'>
        //             <div className='grid sm:grid-cols-1 md:grid-cols-7 gap-8'>
        //                 <HoverBox className='md:col-span-4 lg:col-span-5 rounded-xl bg-red-300 h-60'><Intro /></HoverBox>
        //                 <HoverBox className='md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Location</HoverBox>
        //             </div>
        //             <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-8'>
        //                 <HoverBox className='md:col-span- lg:col-span-2 rounded-xl bg-red-300 h-60'>About Me</HoverBox>
        //                 <HoverBox className='md:col-span-4 lg:col-span-4 rounded-xl bg-red-300 h-60'>Projects</HoverBox>
        //                 <HoverBox className='md:col-span-2 lg:col-span-2 rounded-xl bg-red-300 h-60'>Spotify</HoverBox>
        //             </div>
        //             <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-8'>
        //                 <HoverBox className='md:col-span-4 lg:col-span-4 rounded-xl bg-red-300 h-60'>Designs</HoverBox>
        //                 <HoverBox className='md:col-span-2 lg:col-span-2 rounded-xl bg-red-300 h-60'>Two Truths One Lie</HoverBox>
        //                 <HoverBox className='md:col-span-2 lg:col-span-2 rounded-xl bg-red-300 h-60'>Hobbies</HoverBox>
        //             </div>
        //             <div className='grid sm:grid-cols-1 md:grid-cols-8 gap-8'>
        //                 <HoverBox className='md:col-span-2 lg:col-span-2 rounded-xl bg-red-300 h-60'>Blog</HoverBox>
        //                 <HoverBox className='md:col-span-2 lg:col-span-2 rounded-xl bg-red-300 h-60'>GitHub</HoverBox>
        //                 <HoverBox className='md:col-span-4 lg:col-span-4 rounded-xl bg-red-300 h-60'>Say Hello</HoverBox>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className=''>
            <div className='container mx-auto pt-5 px-5 md:px-20 xl:px-40 '>
                <div className='grid gap-8'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-8'>
                        <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-6 rounded-xl bg-red-300 h-60'><Intro /></HoverBox>
                        <HoverBox className='col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Location</HoverBox>
                        <HoverBox className='col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>About Me </HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-xl bg-red-300 h-60'>Projects</HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Spotify</HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>2 truths one lie</HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-xl bg-red-300 h-60'>Graphic Designs</HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Hobbies</HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>Blog</HoverBox>
                        <HoverBox className='col-span-1 hidden lg:flex md:col-span-3 lg:col-span-2 rounded-xl bg-red-300 h-60'>github</HoverBox>
                        <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 rounded-xl bg-red-300 h-60'>submit form</HoverBox>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
