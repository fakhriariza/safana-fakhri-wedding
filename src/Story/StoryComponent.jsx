import React, { useEffect } from "react";
import styles from "./timeline.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const stories = [
  {
    year: "2019",
    title: "The Beginning",
    description:
      "As a shared passion for social values, they met in Kakak Asuh, an education voluntary community. He, as the founder, she as the new member. They talked for the first time, and they knew they met The One. They dived into conversation like they meet of each other missing home. It's probably right ---when you know, you just know.",
  },
  {
    year: "2019",
    title: "Cliked",
    description:
      "Synced in the same frequency; Intrigued in the same social-politics-even religion values; and having many same of interests, made they share the same feeling. It was different, it was love...",
  },
  {
    year: "",
    title: "Love n Let Go",
    description:
      "- Love always matter, and that's why loving can hurt. During pandemic, he was in Bandung, she was in Jakarta. Everything felt so wrong. They got lost contact until...",
  },
  {
    year: "",
    title: "Reunited",
    description:
      "- ..he sent a very long email, a message that she prayed for---after being separated for a year. The hearts know what it wants. And they, committed to keep this relationship for marriage.",
  },
  {
    year: "",
    title: "Ups n Downs",
    description:
      "- Love always have to build and rebuild. Love never went smoothly, there were ups and downs. They lost contact again, in a week, in months. But Gmail and Google Spreadsheet, always be their messenger. Thanks for the random column and row for keep them connected.",
  },
  {
    year: "",
    title: "The Vow",
    description:
      "- May 4, they finally had the engagement, in front of their families and their loved ones. - Aug 31, inshaAllah, that day will becoming the beginning of their forever long-life journey. Would you please to come and have the joy on their special day?",
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
              <p>{story.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StoryComponent;
