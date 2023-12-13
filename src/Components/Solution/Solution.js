import React from "react";
import Navbar from "../Navbar/Navbar";
import itemsData from "../JOSN/IitemsData.json";
import "./Solution.css";
import SolutionCard from "./SolutionCard";

const Solution = () => {
  const data = [...itemsData];

  return (
    <>
      <Navbar/>
      <div>
      <table class="table">
        <thead class="">
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Time Standard</th>
            <th>Status</th>
            <th>Bluid</th>
            <th>Matrics</th>
            <th>Unit Test</th>
            <th>Function Unit</th>
          </tr>
        </thead>
        {data.map((items) => {
            return <SolutionCard items={items} />;
          })}
      </table>
      </div>
      
    </>
  );
};

export default Solution;
