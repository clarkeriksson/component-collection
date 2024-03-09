'use client'

import PanelMagnet from "./_components/PanelMagnet";

export default function Home() {
    return (
        <main className='flex flex-wrap w-full h-full m-0 p-0 justify-center content-center'>
            <PanelMagnet maxLift={200} className={`w-[400px] h-[400px]`} style={{border: '2px solid', borderRadius: '50px', backgroundImage: 'url("./hbonds1.png")'}}/>
        </main>
    );
}
