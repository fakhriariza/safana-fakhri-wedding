import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./Header/HeaderComponent";
import DoaComponent from "./Doa/DoaComponent";
import BridesComponent from "./Brides/BridesComponent";
import GroomsComponent from "./Grooms/GroomsComponent";
import CeremonyHeader from "./CeremonyHeader/CeremonyHeader";
import AndComponent from "./And/AndComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderComponent />
      <DoaComponent />
      <CeremonyHeader />
      <BridesComponent />
      <AndComponent />
      <GroomsComponent />
    </div>
  );
}

export default App;
