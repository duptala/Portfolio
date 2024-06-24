import React from "react";

const statemenets = [
    "I have a habit of losing my debit card",
    "I've won a Harry Potter book collection",
    "I was born in India",
];

const TwoTruthsOneLie = () => {
    return (
        <div className="w-full h-full bg-twotruthsonelie rounded-3xl p-3">
            <h1 className="relative left-2 top-2 azeret-mono-600 font-bold text-3xl sm:text-xl md:text-3xl lg:text-5xl xl:text-xl dark:text-yellow-950 mb-3 sm:mb-1  md:mb-3">
                &#x1F925; <span className="opacity-70">Two Truths One Lie</span>
            </h1>
            {statemenets.map((statement, index) => {
                return (
                    <li
                        key={index}
                        className="text-yellow-700/60 azeret-mono-400 ml-4 xl:ml-1 text-[1.45rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.5rem] xl:text-[0.875rem]"
                    >
                        {statement}
                    </li>
                );
            })}
        </div>
    );
};

export default TwoTruthsOneLie;
