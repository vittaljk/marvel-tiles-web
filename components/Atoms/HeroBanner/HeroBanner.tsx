import React from 'react'

interface HeroBannerProps {
    bannerVideoUrl?: string;
}

function HeroBanner({ bannerVideoUrl }: HeroBannerProps) {
    return (
        <div className="relative w-full h-[75vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
            >
                <source src={bannerVideoUrl} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}

export default HeroBanner

HeroBanner.defaultProps = {
    bannerVideoUrl: "https://res.cloudinary.com/duy0961om/video/upload/v1762016623/herobannervideo_3a7uknCH_vbdc6x.mp4",
}