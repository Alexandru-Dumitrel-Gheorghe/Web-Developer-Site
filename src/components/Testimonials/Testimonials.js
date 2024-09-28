import React from "react";
import styles from "./Testimonials.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
  return (
    <section className={styles.reviewsSection}>
      <h2 className={styles.heading}>Bewertungen</h2>
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
