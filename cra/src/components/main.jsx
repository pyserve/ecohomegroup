import React, { useEffect, useRef } from "react";

export default function VideoCarousel() {
  const videoRefs = useRef([]);

  useEffect(() => {
    if (videoRefs.current[0]) {
      videoRefs.current[0].play();
    }
  }, []);

  const handleCarouselSlide = (event) => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });
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
      <ol className="carousel-indicators"></ol>
      <div className="carousel-inner">
        <div className="carousel-item active" data-slide-to="0">
          <video
            className="d-block w-100"
            src="videos/bg-7.mp4"
            ref={(el) => (videoRefs.current[0] = el)}
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
}
