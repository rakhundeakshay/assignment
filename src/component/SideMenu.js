import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuMessagesSquare } from "react-icons/lu";
import { SiGoogleanalytics } from "react-icons/si";
import { SiAudiobookshelf } from "react-icons/si";
import { HiDocumentReport } from "react-icons/hi";
import { SiAuthentik } from "react-icons/si";
import { ImProfile } from "react-icons/im";
const ar = require("../image/pic.png");

const SideMenu = () => {
  const [active, setActive] = useState("dashboard");
  return (
    <div className="sidebar">
      <div className="logo">
        <CgProfile /> JUUUNO
      </div>
      <nav>
        <ul>
          <li
            onClick={() => setActive("dashboard")}
            className={`${active === "dashboard" ? "active" : ""}`}
          >
            <LuLayoutDashboard /> Dashboard
          </li>
          <li
            onClick={() => setActive("campaign")}
            className={`${active === "campaign" ? "active" : ""}`}
          >
            <LuMessagesSquare /> Create Campaign
          </li>
          <li
            onClick={() => setActive("analytics")}
            className={`${active === "analytics" ? "active" : ""}`}
          >
            <SiGoogleanalytics /> Analytics
          </li>
          <li
            onClick={() => setActive("audience")}
            className={`${active === "audience" ? "active" : ""}`}
          >
            <SiAudiobookshelf /> Audience Segment
          </li>
          <li
            onClick={() => setActive("reports")}
            className={`${active === "reports" ? "active" : ""}`}
          >
            <HiDocumentReport /> Reports
          </li>
        </ul>
        <div className="profile-wrapper">
          <div className="profile-block">
            <img src={ar} width={"24px"} height={"24px"} />
            <div>
              Ads
              <div>Advertiser Account</div>
            </div>
          </div>
          <div className="list">
            <ImProfile /> Profile
          </div>
          <div className="list">
            <SiAuthentik /> 2f Authentication
          </div>
        </div>
      </nav>
    </div>
  );
};
export default SideMenu;
