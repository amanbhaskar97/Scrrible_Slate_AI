import { useRouter } from 'next/navigation'; 
import { v4 as uuidv4 } from 'uuid'; 
import { ShimmerButton } from './ui/shimmer-button'; 
import React from 'react';

export function Canvsbutton() {
    const router = useRouter();
    
    const generateRoomId = (): string => uuidv4().substring(0, 8);
    
    const handleCreateRoom = () => {
        const roomId = generateRoomId();
        router.push(`/canvas/${roomId}`);
    };
    
    return (
        <ShimmerButton
            className="shadow-2xl px-8 py-4 w-50 h-14" // Added size classes here
            onClick={handleCreateRoom}
        >
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
             Canvas
            </span>
        </ShimmerButton>
    );
}