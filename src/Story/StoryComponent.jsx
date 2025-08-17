import React, { useEffect } from "react";
import styles from "./timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import lamaran from "../assets/lamaran.jpeg";
import foto2 from "../assets/foto2.png";

const stories = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "As a shared passion for social values, we met in Kakak Asuh, an education voluntary community. He, as the founder, she as the new member. We talked for the first time, and we knew we met The One. We dived into conversation like we meet of each other missing home. It's probably right ---when you know, you know.",
  },
  {
    year: "2019",
    title: "Officialy Dating",
    description:
      "We were instantly in sync — drawn to the same frames of thought on society, politics, even faith; intertwined in so many interest made us shared the same feeling. It was different, it was love...",
  },
  {
    year: "2021",
    title: "Love n Let Go",
    description:
      "Love always matter, and that's why loving can hurt. During pandemic, he was in Bandung, she was in Jakarta. Everything felt so wrong, which made us got lost contact until...",
  },
  {
    year: "2022",
    title: "The Reunited",
    description:
      "- .he wrote a very long email, a message that she secretly prayed for---after being separated for a year. The heart knows what it wants. Relationship began more mature.",
  },
  {
    year: "2023-2024",
    title: "Ups n Downs",
    description:
      "- Love always have to build and rebuild. Each time we got lost contact, Gmail and Google Spreadsheet always be our messenger. Thanks for the random column and row for keep them connected.",
  },
  {
    year: "2025",
    title: "The Vow",
    image: lamaran,
    image2: foto2,
    description2:
      "- Aug 31, inshaAllah, we will begin our forever long-life journey. Would you please to come and have the joy on our special day?",
    description:
      "- May 4, we finally got engaged, surrounded by our families and loved ones.",
  },
];

const StoryComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className={styles.timeline}>
      <h1 data-aos="fade-down" data-aos-delay="100" className={styles.title}>
        Our Story
      </h1>
      {stories.map((story, index) => (
        <div
          className={styles.item}
          key={index}
          data-aos="fade-up"
          data-aos-delay={150 + index * 150}
        >
          <div className={styles.marker}>
            <div className={styles.circle} />
            {index !== stories.length - 1 && <div className={styles.line} />}
          </div>
          <div className={styles.details}>
            <h4 className={styles.heading}>
              <span className={styles.year}>{story.year}</span> {story.title}
            </h4>
            <div className={styles.box}>
              <div className={styles.photo}>
                <img className={styles.image} src={story.image}></img>
                <img className={styles.image} src={story.image2}></img>
              </div>
              <p>{story.description}</p>
              <p>{story.description2}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryComponent;
