import React from "react";
import Card from "../Card/Card";


const ViewItems = () => {
  return (
    <div className="viewlist-container">
      <main className="md:w-4/5 sm:w-[90%]">
        <div className="viewlist-heading">
          <h4 className="view-heading font-bold mt-8">Items List</h4>
        </div>
        <div className="mt-8 flex flex-col  justify-center">
          <div className="flex flex-col">
            <Card />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ViewItems;
