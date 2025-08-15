import React, { useState } from "react";
import style from "./galerystyle.module.css";

import wedding1 from "../assets/wedding1.jpg";
import wedding2 from "../assets/wedding2.jpg";
import wedding3 from "../assets/wedding3.jpg";
import wedding4 from "../assets/wedding4.jpg";
import wedding5 from "../assets/wedding5.jpg";
import wedding6 from "../assets/wedding6.jpg";
import wedding7 from "../assets/wedding7.jpg";
import wedding8 from "../assets/wedding8.jpg";
import wedding9 from "../assets/wedding9.jpg";

const photoList = [
  wedding1,
  wedding2,
  wedding3,
  wedding4,
  wedding5,
  wedding6,
  wedding7,
  wedding8,
];

const GaleryComponent = () => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageClick = (photo) => {
    setPreviewImage(photo);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };

  return (
    <>
      <div className={style.galerycontainer}>
        <h1 className={style.title}>Photo of Us</h1>
        {photoList.map((photo, index) => (
          <div
            key={index}
            className={`${style.galleryItem} ${
              style[`size${(index % 5) + 1}`]
            }`}
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
        <div className={style.previewOverlay} onClick={closePreview}>
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
