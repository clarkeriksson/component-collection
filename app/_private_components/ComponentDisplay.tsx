'use client'

// Importing the React library
import React from 'react';
import { useRef, useState, useEffect } from 'react';

// Importing the TypeScript language from the highlight.js library
import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import "highlight.js/styles/atom-one-dark.css";

// Registering the TypeScript language
hljs.registerLanguage('typescript', typescript);

export default function ComponentDisplay({ children, code } : { children: React.ReactNode, code: string }) {

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const [isFocused, setIsFocused] = useState(true);

    function onClick() {
        setIsFocused(!isFocused);
    }

    return (
        <div className={`flex flex-col ${(isFocused) ? 'w-[90%]' : 'w-[20%]'} h-max gap-2 m-0 p-0 justify-center items-center duration-300`} onClick={onClick}>
            <div className='z-50'>{ children }</div>
            <div className={`relative w-full h-max duration-300`}>
                <div className={`absolute left-0 top-0 ${(isFocused) ? 'w-[100%] bg-opacity-0' : 'w-[20%] bg-opacity-100 aspect-square'} duration-500 bg-gray-300 z-10 pointer-events-none`}></div>
                <div className={`absolute left-0 top-0 ${(isFocused) ? 'w-[100%] overflow-y-scroll' : 'w-[20%] overflow-y-hidden aspect-square'} duration-500`}>
                    <pre><code className={`text-xs`}>{ code }</code></pre>
                </div>
            </div>
        </div>
    )
}