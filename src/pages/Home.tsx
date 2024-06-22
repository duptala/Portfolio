import React from 'react';
import HoverBox from '../components/HoverBox'; // Adjust the import path as needed
import Intro from '../components/Intro';


const Home: React.FC = () => {
    return (
        <div className='container mx-auto max-w-6xl pt-5 px-5 md:px-10 xl:px-20'>
            <div className='grid gap-8'>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-8 gap-8'>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-6 rounded-xl bg-red-300 h-80 md:h-96 xl:h-auto'>
                        <Intro />
                    </HoverBox>
                    <HoverBox className='col-span-1 md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        Location
                    </HoverBox>
                    <HoverBox className='col-span-1 md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        About Me
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-4 rounded-xl bg-red-300 h-60 md:h-80 xl:h-auto'>
                        Projects
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        Spotify
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        2 Truths 1 Lie
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-4 rounded-xl bg-red-300 h-60 md:h-80 xl:h-auto'>
                        Graphic Designs
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        Hobbies
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-1 md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        Blog
                    </HoverBox>
                    <HoverBox className='col-span-1 hidden lg:flex md:col-span-3 xl:col-span-2 rounded-xl bg-red-300 aspect-w-1 aspect-h-1'>
                        GitHub
                    </HoverBox>
                    <HoverBox className='col-span-1 sm:col-span-2 md:col-span-6 xl:col-span-4 rounded-xl bg-red-300 h-60 md:h-80 xl:h-auto'>
                        Submit Form
                    </HoverBox>
                </div>
            </div>
        </div>
    );
};

export default Home;
