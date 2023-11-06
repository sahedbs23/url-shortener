"use client";

import React, {ChangeEvent, useState} from "react";
import postUrlShortener from "@/api/mutations/postUrlShortener"

const Home = () => {
    const buttonText ='Shorten';
    const [url, setUrl] = useState('');
    const [shortUrl, setShortUrl] = useState(null);

    const handleCopyText = async (e:React.MouseEvent<HTMLDivElement>) => {
        await navigator.clipboard.writeText(shortUrl || '');
        console.log(shortUrl);
    }

    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value);
    }
    const handleClick = async () => {
        const response = await postUrlShortener(url);
        if(response?.shortUrl){
            setShortUrl(response?.shortUrl);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-items-center p-24">
                <h2 className="text-black pb-4 text-xl">Paste the URL and click on URL </h2>
                <div className="flex items-center mb-6 w-full">
                    <div className="w-1/3">
                        <label
                            className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                            htmlFor="url-shotner">
                            URL
                        </label>
                    </div>
                    <div className="w-2/3">
                        <input
                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            id="url-shotner"
                            type="text"
                            value={url}
                            onChange={handleInputChange}
                             />
                    </div>
                    <div className="w-1/3 pl-4">
                        <button
                            onClick={handleClick}
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded pl-4"
                            type="submit">
                            {buttonText}
                        </button>
                    </div>
                </div>

                {shortUrl && ( <div
                        onClick={handleCopyText}
                        className="flex items-center justify-between text-gray-800 bg-white max-w-sm font-mono text-sm py-3 px-4 w-[250px] border border-solid border-black rounded-md">

                        <div className="flex gap-1">
                            <span>{shortUrl}</span>
                        </div>
                        <span className="flex text-gray-800 cursor-pointer w-5 h-5 hover:text-gray-400 duration-200">
                            <svg
                                className="fill-current"
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 115.77 122.88"
                                 >
                                <g>
                                    <path className="st0" d="M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"/>
                                </g>
                            </svg>
                        </span>
                    </div>
                )}
        </main>
    )
}

export default Home;
