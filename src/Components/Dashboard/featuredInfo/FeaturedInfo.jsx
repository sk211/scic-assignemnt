import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./FeaturedInfo.css";
const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5,9847</span>
          <span className="featuredMoneyRate">
            -32 <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>

        <span className="featuredSub">compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$7,9847</span>
          <span className="featuredMoneyRate">
            -2 <ArrowDownward  className="featuredIcon negative" />
          </span>
        </div>

        <span className="featuredSub">compare to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6,9847</span>
          <span className="featuredMoneyRate">
            +2.5 <ArrowUpward className="featuredIcon"  />
          </span>
        </div>

        <span className="featuredSub">compare to last month</span>
      </div>
     
    </div>
  );
};

export default FeaturedInfo;
