import { useState, useEffect, useRef } from "react";
import "./App.css";
import api from "./api";

import HeaderComponent from "./Header/HeaderComponent";
import BridesComponent from "./Brides/BridesComponent";
import QRComponent from "./QR/QRComponent";
import WishPage from "./Wishes/Wishes";
import DateTimeComponent from "./DateTime/DateTimeComponent";
import DresscodeComponent from "./Dresscode/DresscodeComponent";
import GaleryComponent from "./GaleryComponent/GaleryComponent";
import StoryComponent from "./Story/StoryComponent";
import GiftComponent from "./Gift/GiftComponent";
import ThankyouComponent from "./ThankYou/ThankyouComponent";
import MusicComponent from "./Music/MusicComponent";
import DoaComponentTwo from "./DoaTwi/DoaComponentTwo";
import CountdownComponent from "./Countdown/CountdownComponent";

function App() {
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  // ✅ Ref for DoaComponentTwo
  const doaRef = useRef(null);

  // Extract slug from URL
  const getSlugFromUrl = () => {
    const url = window.location.href;
    const match = url.match(/mengundang=([^&]+)/);
    return match ? decodeURIComponent(match[1]) : null;
  };

  useEffect(() => {
    const slug = getSlugFromUrl();

    if (!slug) {
      setLoading(false);
      return;
    }

    api
      .get(`/guests/slug/${slug}`)
      .then((response) => {
        setGuestData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching guest data:", error);
        setLoading(false);
      });
  }, []);

  // ✅ Scroll AFTER DoaComponentTwo is rendered
  useEffect(() => {
    if (isOpened && doaRef.current) {
      doaRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpened]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderComponent
        guestData={guestData}
        onOpen={() => setIsOpened(true)} // only open
        isOpened={isOpened}
      />

      <MusicComponent />

      {isOpened && (
        <>
          {/* attach ref to DoaComponentTwo */}
          <div ref={doaRef}>
            <DoaComponentTwo />
          </div>

          <BridesComponent />
          <DateTimeComponent />
          <CountdownComponent />
          <DresscodeComponent />
          <GaleryComponent />
          <StoryComponent />
          {guestData && guestData.invitation_id && (
            <QRComponent invitationId={guestData.invitation_id} />
          )}
          <WishPage
            data={guestData?.wishes || []}
            invitationId={guestData?.invitation_id}
          />
          <ThankyouComponent />
        </>
      )}
    </div>
  );
}

export default App;
