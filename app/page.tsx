'use client'

import ComponentDisplay from "./_private_components/ComponentDisplay";

import { PanelMagnet, PanelMagnetTSX } from "./_components/PanelMagnet";

export default function Home() {
    return (
        <main className='flex flex-wrap w-full h-full m-0 p-0'>
            <ComponentDisplay code={PanelMagnetTSX}>
                <PanelMagnet maxLift={50} className={`w-[400px] h-[400px]`} style={{border: '1px solid blue', borderRadius: '0.5rem', backgroundImage: 'url("./hbonds1.png")'}}/>
            </ComponentDisplay>
        </main>
    );
}
