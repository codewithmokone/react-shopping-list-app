import React from "react";
import Card from "../Card/Card";


const ViewItems = () => {
  return (
    <div className="viewlist-container">
      <main className="viewlist-main">
        <div className="viewlist-heading">
          <h4 className="view-heading font-bold mt-8">Items List</h4>
        </div>
        <div className="viewlist-items mt-8">
          <Card />
        </div>
      </main>
    </div>
  );
};

export default ViewItems;
