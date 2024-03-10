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

    const [isFocused, setIsFocused] = useState(true);

    function onClick() {
        setIsFocused(!isFocused);
    }

    return (
        <div className={`grid max-w-full max-h-full m-4 p-0`} onClick={onClick}>
            <div className={`col-start-1 row-start-1 ${(isFocused) ? `opacity-0` : 'opacity-100'} w-max h-max box-border z-50 duration-150`} ref={compRef}>
                { children }
            </div>
            <div className={`col-start-1 row-start-1 ${(isFocused) ? 'h-full w-full opacity-100' : `w-[${compRef.current?.clientWidth}px] h-[${compRef.current?.clientHeight}px] opacity-0`} text-xs overflow-hidden duration-300`}>
                <pre><code>{ code }</code></pre>
            </div>
        </div>
    )
}