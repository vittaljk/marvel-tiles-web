import React from 'react'

interface HeroBannerProps {
    bannerVideoUrl?: string;
    bannerVideoMobileUrl?: string;
}

function HeroBanner({ bannerVideoUrl, bannerVideoMobileUrl }: HeroBannerProps) {
    return (
        <div className="relative w-full h-[75vh] overflow-hidden">
            <div className='hidden md:block w-full h-full'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={bannerVideoUrl} type="video/mp4" />
                </video>
            </div>
            <div className='md:hidden w-full h-full'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src={bannerVideoMobileUrl} type="video/mp4" />
                </video>
            </div>
            <div className="absolute inset-0 bg-black/40" />
        </div>
    )
}

export default HeroBanner

HeroBanner.defaultProps = {
    bannerVideoUrl: "https://res.cloudinary.com/duy0961om/video/upload/v1762016623/herobannervideo_3a7uknCH_vbdc6x.mp4",
    bannerVideoMobileUrl: "https://res.cloudinary.com/duy0961om/video/upload/v1762458720/mobile-reel_kpQEIV7d_ttfs0v.mp4",
}