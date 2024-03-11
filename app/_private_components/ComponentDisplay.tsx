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

    const compRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        hljs.highlightAll();
    }, []);

    const [isFocused, setIsFocused] = useState(false);

    function onClick() {
        setIsFocused(!isFocused);
    }

    return (
        <div className={`grid box-border gap-4 max-w-full max-h-full m-0 p-0`}>
            <div className={`box-border col-start-1 row-start-1 grid w-max h-max`}>
                <div className={`flex col-start-1 row-start-1 ${(isFocused) ? 'opacity-20 hover:opacity-50 w-[48px] h-[48px] m-6 border-red-300 bg-red-200 text-red-300' : `opacity-100 w-[96px] h-[96px] m-0 border-blue-300 bg-blue-200 text-blue-300`} cursor-pointer border rounded-xl z-40 duration-300 justify-center items-center font-extrabold text-3xl select-none`} onClick={onClick}>{`${(isFocused) ? '<' : '</>'}`}</div>
                <div className={`col-start-1 row-start-1 box-border max-w-[100%] max-h-[100%] ${(isFocused) ? `opacity-100 h-full w-full` : `opacity-0 w-[96px] h-[96px]`} border z-30 rounded-xl text-xs overflow-auto duration-300`}>
                    <pre><code>{ code }</code></pre>
                </div>
            </div>
            <div className={`col-start-1 row-start-1 ${(isFocused) ? `opacity-0` : 'opacity-100'} z-50 ml-28 w-max h-max box-border duration-300`} ref={compRef}>
                { children }
            </div>
        </div>
    )
}