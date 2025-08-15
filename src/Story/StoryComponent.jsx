import styles from "./timeline.module.css";

const stories = [
  {
    year: "2020",
    title: "Started College",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    year: "2021",
    title: "Internship",
    description: "Worked as a frontend intern and built a dashboard UI.",
  },
  {
    year: "2023",
    title: "Graduation",
    description: "Completed my degree with honors and distinction.",
  },
  {
    year: "2024",
    title: "First Job",
    description: "Joined Tech Co. as a full-time frontend developer.",
  },
];

const StoryComponent = () => {
  return (
    <div className={styles.timeline}>
      <h1 className={styles.title}>Our Story</h1>
      {stories.map((story, index) => (
        <div className={styles.item} key={index}>
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
