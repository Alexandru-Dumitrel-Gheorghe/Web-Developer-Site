// src/components/VideoInfo/VideoInfo.jsx
import React from "react";
import styles from "./VideoInfo.module.css";
import videoSrc from "../../assets/test2.mp4"; // Importing the video from assets

const VideoInfo = () => {
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
          <video className={styles.video} controls autoPlay muted loop>
            <source src={videoSrc} type="video/mp4" />{" "}
            {/* Using the imported video */}
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default VideoInfo;
