import React, { useRef, useEffect } from "react";
import styles from "./VideoInfo.module.css";
import videoSrc from "../../assets/test2.mp4";

const VideoInfo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observerOptions = {
      root: null, // Folosește viewport-ul browserului
      rootMargin: "0px",
      threshold: 0.5, // 50% din videoclip este vizibil
    };

    const handlePlay = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      });
    };

    const observer = new IntersectionObserver(handlePlay, observerOptions);

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className={styles.videoSection}>
      <div className={styles.container}>
        <div className={styles.textSection}>
          <h1 className={styles.title}>Mein Arbeitsprozess</h1>
          <div className={styles.textWrapper}>
            <p className={styles.description}>
              Werfen Sie einen Blick hinter die Kulissen und entdecken Sie, wie
              ich moderne und ansprechende Webanwendungen entwickle.
            </p>
            <p className={styles.extraInfo}>
              Mit Liebe zum Detail gestalte ich benutzerfreundliche Oberflächen
              und funktionale Lösungen, die Ihre Erwartungen übertreffen.
            </p>
          </div>
        </div>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            autoPlay
            muted
            loop
            playsInline
            ref={videoRef}
          >
            <source src={videoSrc} type="video/mp4" />
            Browserul tău nu suportă elementul video.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoInfo;
