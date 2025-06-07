"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import React from "react";

interface Props {
    size?: number;
    isActive?: boolean;
}

const LordBillingBlackIcon: React.FC<Props> = ({ size = 27, isActive = false}) => {
    return (
        <Player
            autoplay
            loop
            src="/Billing-yellow.json"
            style={{ height: size, width: size}}
            />
    );
};

export default LordBillingBlackIcon;