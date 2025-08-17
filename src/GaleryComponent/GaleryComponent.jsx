import React, { useState, useEffect } from "react";
import style from "./galerystyle.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import wedding1 from "../assets/wedding1.jpg";
import wedding2 from "../assets/wedding2.JPG";
import wedding3 from "../assets/wedding3.JPG";
import wedding4 from "../assets/wedding4.jpg";
import wedding5 from "../assets/wedding5.JPG";
import wedding6 from "../assets/wedding6.JPG";
import wedding7 from "../assets/wedding7.JPG";
import wedding8 from "../assets/wedding8.JPG";
import wedding9 from "../assets/wedding9.JPG";
import wedding10 from "../assets/wedding10.JPG";
import wedding11 from "../assets/wedding11.JPG";
import wedding12 from "../assets/wedding12.JPG";
import wedding13 from "../assets/wedding13.png";
import wedding14 from "../assets/wedding14.jpeg";

const photoList = [
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  wedding5,
  wedding6,
  wedding7,
  wedding8,
  wedding9,
  wedding10,
  wedding11,
  wedding12,
  wedding13,
  wedding14,
];

const GaleryComponent = () => {
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  const handleImageClick = (photo) => setPreviewImage(photo);
  const closePreview = () => setPreviewImage(null);

  return (
    <>
      <div className={style.galerycontainer}>
        <h1 data-aos="fade-down" data-aos-delay="100" className={style.title}>
          Photo of Us
        </h1>
        {photoList.map((photo, index) => (
          <div
            key={index}
            className={`${style.galleryItem} ${
              style[`size${(index % 5) + 1}`]
            }`}
            data-aos="zoom-in"
            data-aos-delay={100 + index * 150} // stagger animation
          >
            <img
              src={photo}
              alt={`wedding${index + 1}`}
              onClick={() => handleImageClick(photo)}
            />
          </div>
        ))}
      </div>

      {previewImage && (
        <div
          className={style.previewOverlay}
          onClick={closePreview}
          data-aos="fade-in"
        >
          <div
            className={style.previewContent}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={previewImage} alt="preview" />
            <button className={style.closeButton} onClick={closePreview}>
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GaleryComponent;
