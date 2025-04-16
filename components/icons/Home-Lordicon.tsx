"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface Props {
    size?: number;
    isActive?: boolean;
}

const LordHomeIcon: React.FC<Props> = ({ size = 24, isActive = false}) => {
    return (
        <Player
            autoplay
            loop
            src={ isActive ? "./Home-active.json" : "./Home.json"}
            style={{ height: size, width: size }}
            />
    );
};

export default LordHomeIcon;