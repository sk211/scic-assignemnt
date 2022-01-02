import { Dashboard, LineStyle, Timeline, TrendingUp } from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Dashboard />
              home
            </li>
            <li className="sidebarListItem">
              <Timeline />
              analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp />
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// const products = [
//     {
//       id: 1,
//       img: "https://www.transparentpng.com/thumb/shirt/ytM0vF-red-polo-tshirt-fron-view-t-shirt.png",
//       title: "SHIRT STYLE!",
//       cat:"women",
//       price:32,
//       color:'black',
//       rating:4,
//     },
//     {
//       id: 2,
//       img: "https://www.transparentpng.com/thumb/blazer/blazer-black-jackets-women-suit-pictures-29.png",
//       title: "LOUNGEWEAR LOVE",
//       cat:"coat"
//       ,
//       price:32,
//       color:'black',
//       rating:4,
//     },
//     {
//       id: 3,
//       img: "https://www.transparentpng.com/thumb/blazer/new-royds-black-blazer-pictures-15.png",
//       title: "LIGHT JACKETS",
//       cat:"jeans"
//       ,
//       price:32,
//       color:'black',
//       rating:4,
//     },
//     {
//       id: 4,
//       img: "https://www.transparentpng.com/thumb/blazer/new-royds-black-blazer-pictures-15.png",
//       title: "LIGHT JACKETS",
//       cat:"jeans"
//       ,
//       price:32,
//       color:'black',
//       rating:4,
//     },
//     {
//       id: 5,
//       img: "https://www.transparentpng.com/thumb/blazer/new-royds-black-blazer-pictures-15.png",
//       title: "LIGHT JACKETS",
//       cat:"jeans"
//       ,
//       price:32,
//       color:'black',
//       rating:4,
//     },
//   ];
