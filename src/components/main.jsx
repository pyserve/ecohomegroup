import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function VideoCarousel() {
    const videoRefs = useRef([]);

    useEffect(() => {
        // Play the first video on component mount
        if (videoRefs.current[0]) {
            videoRefs.current[0].play();
            // videoRefs.current[1].play();
            // videoRefs.current[2].play();
        }
    }, []);

    const handleCarouselSlide = (event) => {
        // Pause all videos and reset their playback
        videoRefs.current.forEach((video) => {
            if (video) {
                video.pause();
                video.currentTime = 0; // Reset video to start
            }
        });

        // Play the video of the currently active carousel item
        const activeIndex = event.relatedTarget.dataset.slideTo;
        if (videoRefs.current[activeIndex]) {
            videoRefs.current[activeIndex].play();
        }
    };

    return (
        <div
            id="videoCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            onSlide={(e) => handleCarouselSlide(e)}
        >
            <ol className="carousel-indicators">
                {/* <li data-bs-target="#videoCarousel" data-bs-slide-to="0" className="active"></li> */}
                {/* <li data-bs-target="#videoCarousel" data-bs-slide-to="1"></li> */}
                {/* <li data-bs-target="#videoCarousel" data-bs-slide-to="2"></li> */}
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active" data-slide-to="0">
                    <video
                        className="d-block w-100"
                        src="videos/bg-6.mp4"
                        ref={(el) => (videoRefs.current[0] = el)}
                        muted
                        loop
                    />
                </div>
                {/* <div className="carousel-item" data-slide-to="1">
                    <video
                        className="d-block w-100"
                        src="videos/bg-6.mp4"
                        ref={(el) => (videoRefs.current[1] = el)}
                        muted
                        loop
                    />
                </div> */}
                {/* <div className="carousel-item" data-slide-to="2">
                    <video
                        className="d-block w-100"
                        src="videos/bg-4.mp4"
                        ref={(el) => (videoRefs.current[2] = el)}
                        muted
                        loop
                    />
                </div> */}
            </div>
            <a
                className="carousel-control-prev"
                href="#videoCarousel"
                role="button"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a
                className="carousel-control-next"
                href="#videoCarousel"
                role="button"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
    );
}
