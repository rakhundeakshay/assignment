const upArrow = require("../image/up.png");
const downArrow = require("../image/down.png");
const apple = require("../image/apple.png");
const windos = require("../image/windos.png");
const store = require("../image/store.png");
const search = require("../image/Vector.png");

const Dashboard = ({ data }) => {
  const PlatformIcon = ({ platform }) => {
    switch (platform) {
      case "android":
        return (
          <span>
            <img src={store} width={"38px"} height={"38px"} />
          </span>
        );
      case "apple":
        return (
          <span>
            <img src={apple} width={"38px"} height={"38px"} />
          </span>
        );
      case "chrome":
        return (
          <span>
            <img src={windos} width={"38px"} height={"38px"} />
          </span>
        );
      default:
        return null;
    }
  };
  return (
    <div className="main-content">
      <h1>Dashboard</h1>
      <div className="dashboard-wrapper">
        <div>
          <div className="search-heading">Search for Saved Campaigns</div>
          <div className="search">
            <div>
              <img src={search} width={"14px"} height={"14px"} />
              <input type="search" placeholder="Search" />
            </div>
            <button>Create Campaign</button>
          </div>
        </div>
        <div className="filters">
          <select className="filter-select">
            <option>Store</option>
          </select>
          <select className="filter-select">
            <option>imported Apps</option>
          </select>
          <select className="filter-select">
            <option>Campaign Type</option>
          </select>
          <select className="filter-select">
            <option>Country</option>
          </select>
          <select className="filter-select">
            <option>Tracking</option>
          </select>
          <select className="filter-select">
            <option>Date Range</option>
          </select>
          <button className="apply-btn">Apply</button>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Campaign Description</th>
                <th>Platforms</th>
                <th>Campaign Status</th>
                <th>Total Clicks</th>
                <th>Total Installs</th>
                <th>Total Events</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td className="item-info">
                    <div className="item-logo">
                      <img src={item.logo} width={"35px"} height={"30px"} />
                    </div>
                    <div className="item-wrapper">
                      <div className="item-name">{item.name}</div>
                      <div className="item-desc">{item.description}</div>
                    </div>
                  </td>
                  <td>
                    <div className="platforms">
                      {item.platforms.map((platform) => (
                        <PlatformIcon key={platform} platform={platform} />
                      ))}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`status-badge ${item.status.toLowerCase()}`}
                    >
                      {item.count} {item.status}
                    </div>
                  </td>
                  <td className="metric">
                    <div>{item.totalClicks}</div>
                    <div
                      className={`metric-number ${item.clickStatus == "up" ? "up" : "down"
                        }`}
                    >
                      <span>{item.clickCount}</span>
                      <img
                        width={"10px"}
                        height={"10px"}
                        src={item.clickStatus == "up" ? upArrow : downArrow}
                      />
                    </div>
                  </td>
                  <td className="metric">
                    <div>{item.totalInstalls}</div>
                    <div
                      className={`metric-number ${item.clickStatus == "up" ? "up" : "down"
                        }`}
                    >
                      <span>{item.installsCount}</span>
                      <img
                        width={"10px"}
                        height={"10px"}
                        src={item.clickStatus == "up" ? upArrow : downArrow}
                      />
                    </div>
                  </td>
                  <td className="metric">
                    <div>{item.totalEvents}</div>
                    <div
                      className={`metric-number ${item.clickStatus == "up" ? "up" : "down"
                        }`}
                    >
                      <span>{item.eventCount}</span>
                      <img
                        width={"10px"}
                        height={"10px"}
                        src={item.clickStatus == "up" ? upArrow : downArrow}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
