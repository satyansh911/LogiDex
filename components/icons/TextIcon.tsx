"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import { LucideProps } from "lucide-react";
import React from "react";

interface Props {
    size?: number;
    isActive?: boolean;
}

const Lord404Icon: React.FC<LucideProps> = ({ size = 24}) => {
    return (
        <Player
            autoplay
            loop
            src="/TextIcon.json"
            style={{ height: size, width: size }}
            />
    );
};

export default Lord404Icon;