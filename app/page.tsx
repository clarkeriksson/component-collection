'use client'

import ComponentDisplay from "./_private_components/ComponentDisplay";

import { PanelMagnet, PanelMagnetTSX } from "./_components/PanelMagnet";

export default function Home() {
    return (
        <main className='flex flex-wrap w-full h-full m-0 p-0'>
            <ComponentDisplay code={PanelMagnetTSX}>
                <PanelMagnet maxLift={50} className={`w-[400px] h-[400px] border border-blue-300 rounded-md`} style={{backgroundImage: 'url("./hbonds1.png")'}}/>
            </ComponentDisplay>
            {/*
            <ComponentDisplay code={PanelMagnetTSX}>
                <PanelMagnet maxLift={50} className={`w-[500px] h-[500px] border border-blue-300 rounded-md z-50`}>
                    <div className={`w-full h-full bg-gradient-to-b from-blue-300 to-blue-500`}></div>
                </PanelMagnet>
            </ComponentDisplay>
            */}
        </main>
    );
}
