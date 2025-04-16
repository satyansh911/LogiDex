"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface Props {
    size?: number;
    isActive?: boolean;
}

const LordWorkflowsIcon: React.FC<Props> = ({ size = 24, isActive = false}) => {
    return (
        <Player
            autoplay
            loop
            src={ isActive ? "./Workflows-active.json" : "./Workflows.json"}
            style={{ height: size, width: size }}
            />
    );
};

export default LordWorkflowsIcon;