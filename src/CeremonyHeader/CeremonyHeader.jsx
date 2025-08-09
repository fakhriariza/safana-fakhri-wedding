import React from "react";
import style from "./ceremony.module.css";

class CeremonyHeader extends React.Component {
  render() {
    return (
      <div className={style.header}>
        <div className={style.doacontent}>
          <h1 className={style.title}>The Wedding Of</h1>
          <h2 className={style.subtitle}>
            With the blessing of the almighty Allah S.W.T., it would be our
            utmost joy to have your presence bestowed upon our cherished wedding
            of
          </h2>
        </div>
      </div>
    );
  }
}

export default CeremonyHeader;
