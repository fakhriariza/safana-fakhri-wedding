import { useState, useEffect } from "react";
import "./App.css";
import api from "./api";

import HeaderComponent from "./Header/HeaderComponent";
import DoaComponent from "./Doa/DoaComponent";
import BridesComponent from "./Brides/BridesComponent";
import GroomsComponent from "./Grooms/GroomsComponent";
import CeremonyHeader from "./CeremonyHeader/CeremonyHeader";
import AndComponent from "./And/AndComponent";
import QRComponent from "./QR/QRComponent";
import TimePage from "./TimePage/TimePage";
import WishPage from "./Wishes/Wishes";

function App() {
  const [guestData, setGuestData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <HeaderComponent
        guestData={guestData}
        onOpen={() => setIsOpened(true)}
        isOpened={isOpened}
      />

      {isOpened && (
        <>
          <DoaComponent />
          <CeremonyHeader />
          <BridesComponent />
          <AndComponent />
          <GroomsComponent />
          {guestData && guestData.invitation_id && (
            <QRComponent invitationId={guestData.invitation_id} />
          )}
          <TimePage />
          <WishPage
            data={guestData?.wishes || []}
            invitationId={guestData?.invitation_id}
          />
        </>
      )}
    </div>
  );
}

export default App;
