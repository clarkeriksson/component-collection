'use client'

import React from 'react'
import { useRef, useState } from 'react'

export function PanelMagnet({ children, maxLift=20, className='', style={} }: { children?: React.ReactNode, maxLift?: number, className?: string, style?: React.CSSProperties}) {

    const panelRef = useRef<HTMLDivElement>(null);

    const posRef = useRef({ x: 0, y: 0 });
    const inRef = useRef(false);

    const [transform, setTransform] = useState(`rotate3d(0, 0, 1, 0deg)`);

    function mousePosition(e: React.MouseEvent): void {
        const rect = e.currentTarget.getBoundingClientRect();
        posRef.current.x = e.clientX - rect.left;
        posRef.current.y = e.clientY - rect.top;
    }

    function onMouseMove(e: React.MouseEvent): void {
        if (inRef.current) {
            mousePosition(e);
            const rect = e.currentTarget.getBoundingClientRect();
            const diagonal = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
            const maxAngle = Math.atan2(maxLift, diagonal) * 180 / Math.PI;
            const center = { x: rect.width / 2, y: rect.height / 2 };
            const vector = { x: posRef.current.x - center.x, y: posRef.current.y - center.y };
            const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
            const uvector = { x: vector.x / length, y: vector.y / length };

            const vertical = maxLift * Math.sin((Math.PI / 2) * length / diagonal);
            const angle = maxAngle * length / diagonal;
            setTransform(`perspective(1000px) translate3d(0, 0, ${vertical}px) rotate3d(${uvector.y}, ${-uvector.x}, 0, ${angle}deg)`);
        }
    }

    function onMouseEnter(e: React.MouseEvent): void {
        inRef.current = true;
    }

    function onMouseLeave(e: React.MouseEvent): void {
        setTransform(`perspective(1000px) translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)`);
        inRef.current = false;
    }

    return (
        <div className={`duration-500 ease-in-out hover:duration-100 hover:ease-linear ${className}`} style={{transform: transform, ...style}} ref={ panelRef } onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } onMouseMove={ onMouseMove }>
            { children }
        </div>
    )
}

export const PanelMagnetTSX = 
`import React from 'react'
import { useRef, useState } from 'react'

export default function PanelMagnet({ children, maxLift=20, className='', style={} }: { children?: React.ReactNode, maxLift?: number, className?: string, style?: React.CSSProperties}) {

    const panelRef = useRef<HTMLDivElement>(null);

    const posRef = useRef({ x: 0, y: 0 });
    const inRef = useRef(false);

    const [transform, setTransform] = useState(\`rotate3d(0, 0, 1, 0deg)\`);

    function mousePosition(e: React.MouseEvent): void {
        const rect = e.currentTarget.getBoundingClientRect();
        posRef.current.x = e.clientX - rect.left;
        posRef.current.y = e.clientY - rect.top;
    }

    function onMouseMove(e: React.MouseEvent): void {
        if (inRef.current) {
            mousePosition(e);
            const rect = e.currentTarget.getBoundingClientRect();
            const diagonal = Math.sqrt(rect.width * rect.width + rect.height * rect.height) / 2;
            const maxAngle = Math.atan2(maxLift, diagonal) * 180 / Math.PI;
            const center = { x: rect.width / 2, y: rect.height / 2 };
            const vector = { x: posRef.current.x - center.x, y: posRef.current.y - center.y };
            const length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
            const uvector = { x: vector.x / length, y: vector.y / length };

            const vertical = maxLift * Math.sin((Math.PI / 2) * length / diagonal);
            const angle = maxAngle * length / diagonal;
            setTransform(\`perspective(1000px) translate3d(0, 0, \${vertical}px) rotate3d(\${uvector.y}, \${-uvector.x}, 0, \${angle}deg)\`);
        }
    }

    function onMouseEnter(e: React.MouseEvent): void {
        inRef.current = true;
    }

    function onMouseLeave(e: React.MouseEvent): void {
        setTransform(\`perspective(1000px) translate3d(0, 0, 0) rotate3d(0, 0, 1, 0deg)\`);
        inRef.current = false;
    }

    return (
        <div className={\`duration-500 ease-in-out hover:duration-100 hover:ease-linear \${className}\`} style={{transform: transform, ...style}} ref={ panelRef } onMouseEnter={ onMouseEnter } onMouseLeave={ onMouseLeave } onMouseMove={ onMouseMove }>
            { children }
        </div>
    )
}
`;