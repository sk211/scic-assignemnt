import React from "react";
import Chart from "../../Components/chart/Chart";
import FeaturedInfo from "../../Components/featuredInfo/FeaturedInfo";
import "./Home.css";

import {userData} from "../../fakedata"
import WidgetLg from "../../Components/widgetLg/WidgetLg";
import Widgetsm from "../../Components/widgetSm/WidgetSm";
const Home = () => {
  return <div className="home">
      

      <FeaturedInfo/>
      <Chart data ={userData} title ="User Analytics" grid dataKey="Active User" />
<div className="homeWidgets">
<WidgetLg/>
<Widgetsm/>
</div>

  </div>;
};

export default Home;
