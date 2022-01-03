import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  Dashboard,
  DynamicFeed,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Dashboard className="sidebarIcon" />
              home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <PermIdentity className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem ">
              <Storefront className="sidebarIcon" />
              Products
            </li>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Message
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
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
