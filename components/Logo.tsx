import { cn } from '@/lib/utils';
import { BrainCircuit, SquareDashedMousePointer } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

function Logo({fontSize = "text-2xl", iconSize = 20} : {fontSize?: string; iconSize?: number;}) {
  return (
    <Link href="/" className={cn("text-2xl font-extrabold flex items-center gap-2",fontSize)}>
        <div className="rounded-xl bg-gradient-to-r from-[#3A82F6] to-[#3370D6] p-2">
            <BrainCircuit size={iconSize} className="stroke-white"/>
        </div>
        <div>
            <span className="bg-gradient-to-r from-[#3A82F6] to-[#3370D6] bg-clip-text text-transparent">Logi</span>
            <span className="text-[#020817] dark:text-stone-300">Dex</span>
        </div>
    </Link>
  )
}

export default Logo