import React from 'react'
import MattyFootyHD from '/designs/youtube/mattyfooty.png'
import LightSkinChris from '/designs/youtube/lightskinchris.png'
import Lachlan from '/designs/youtube/lachlan.png'
import Reloaded from '/designs/youtube/reloaded.png'
import Jeanfils from '/designs/youtube/jeanfils.png'

const Youtube = () => {
    return (
        <>
            <h1 className="mb-3 flex flex-col justify-center items-center azeret-mono-600 text-2xl text-gray-600 dark:text-pinktext">
                YouTube Banners
            </h1>
            <div className='w-fit lg:w-[80%] flex flex-col gap-4 md:gap-6 mb-10'>
                <img src={MattyFootyHD} alt={MattyFootyHD} />
                <img src={LightSkinChris} alt={LightSkinChris} />
                <img src={Lachlan} alt={Lachlan} />
                <img src={Reloaded} alt={Reloaded} />
                <img src={Jeanfils} alt={Jeanfils} />
            </div>
        </>
    )
}

export default Youtube