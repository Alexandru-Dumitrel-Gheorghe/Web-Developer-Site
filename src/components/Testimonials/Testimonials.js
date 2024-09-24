import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

Chart.register(...registerables);

const reviews = [
  {
    name: "Aleksandar Nikolic",
    rating: 5,
    review:
      "Professional service, very reliable. Highly recommend for anyone looking to create modern websites!",
  },
  {
    name: "TopStyle",
    rating: 4,
    review:
      "Great work, met our expectations! Just a bit more work on the design details, but overall excellent.",
  },
  {
    name: "Kassa",
    rating: 5,
    review:
      "Exceptional! The website we needed was delivered quickly and exactly as required. Great communication throughout the project.",
  },
];

const Testimonials = () => {
  const data = {
    labels: reviews.map((review) => review.name),
    datasets: [
      {
        label: "Rating",
        data: reviews.map((review) => review.rating),
        backgroundColor: "rgba(55, 114, 255, 0.8)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.heading}>Bewertungen</h2>
      <div className={styles.chartContainer}>
        <Bar
          data={data}
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: "#fff",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
              x: {
                ticks: {
                  color: "#fff",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.1)",
                },
              },
            },
          }}
        />
      </div>
      <div className={styles.reviewsContainer}>
        {reviews.map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <h3 className={styles.reviewerName}>{review.name}</h3>
            <div className={styles.rating}>
              {[...Array(review.rating)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={styles.star}
                />
              ))}
              {[...Array(5 - review.rating)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={faStar}
                  className={styles.starEmpty}
                />
              ))}
            </div>
            <p className={styles.reviewText}>{review.review}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
