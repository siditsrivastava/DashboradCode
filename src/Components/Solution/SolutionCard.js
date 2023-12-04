import React, { useState } from "react";
import "./Solution.css";
import SolutionBody from "./SolutionBody";

const SolutionCard = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <tbody className="table-row" key={props.items.id}>
        {props.items.status === "Rejected" ? (
          <tr
            style={{ backgroundColor: "#FF8989" }}
            onClick={() => setOpen(!open)}
            
            
          >
            <td data-cell="name" className="table-details" >{props.items.name.length >= 0 ? props.items.name : "N/A"}</td>
            <td data-cell="owner" className="table-details">{props.items.owner.length >= 0 ? props.items.owner : "N/A"}</td>
            <td data-cell="timestandard" className="table-details">{props.items.timestandard}</td>
            <td data-cell="status" className="table-details"> {props.items.status}</td>
            <td data-cell="build" className="table-details">
              <progress
                value={props.items.bulid.progress}
                max="100"
                className="progress"
               
              />
            </td>
            <td data-cell="matrics" className="table-details">
              <progress
                value={props.items.matrics.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="unittest" className="table-details">
              <progress
                value={props.items.unittest.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="functionaltest" className="table-details">
              <progress
                value={props.items.fuctionaltest.progress}
                max="100"
                className="progress"
              />
            </td>
          </tr>
        ) : props.items.status === "Pending" ? (
          <tr style={{ backgroundColor: "#D0D4CA" }} onClick={() => setOpen(!open)}>
            <td data-cell="name" className="table-details" >
              {props.items.name}   
            </td>
            <td data-cell="owner" className="table-details">{props.items.owner.length <= 0 ? props.items.owner : "N/A"}</td>
            <td data-cell="timestandard" className="table-details">{props.items.timestandard}</td>
            <td data-cell="status" className="table-details">{props.items.status}</td>
            <td data-cell="bulid" className="table-details">
              <progress
                className="progress" style={{backgroundColor:"red"}}
                value={props.items.bulid.progress}
                max="100"
                
              />
            </td>
            <td data-cell="matrics" className="table-details">
              <progress
              className="progress"
                value={props.items.matrics.progress}
                style={{backgroundColor:"red"}}
                max="100"
              />
            </td>
            <td data-cell="unittest" className="table-details">
              <progress
              className="progress"
                value={props.items.unittest.progress}
                max="100"
              />
            </td>
            <td data-cell="functinaltest" className="table-details">
              <progress
                className="progress"
                value={props.items.fuctionaltest.progress}
                max="100"
              />
            </td>
          </tr>
        ) : props.items.status === "Success" ? (
          <tr style={{ backgroundColor: "#A6CF98" }} onClick={() => setOpen(!open)}>
            <td data-cell="name" className="table-details">
             {props.items.name}
            </td>
            <td data-cell="owner" className="table-details">{props.items.owner}</td>
            <td data-cell="timstandard" className="table-details">{props.items.timestandard}</td>
            <td data-cell="status" className="table-details">{props.items.status}</td>
            <td data-cell="bulid" className="table-details">
              <progress
                value={props.items.bulid.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="matrics" className="table-details">
              <progress
                value={props.items.matrics.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="unittest" className="table-details">
              <progress
                value={props.items.unittest.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="functionaltest" className="table-details">
              <progress
                value={props.items.fuctionaltest.progress}
                max="100"
                className="progress"
              />
            </td>
          </tr>
         ) : (
          <tr style={{ backgroundColor: "#8ACDD7" }} onClick={() => setOpen(!open)}>
            <td  data-cell="name"  className="table-details">
             {props.items.name}
            </td>
            <td data-cell="owner" className="table-details">{props.items.owner}</td>
            <td data-cell="timestandard" className="table-details">{props.items.timestandard}</td>
            <td data-cell="status" className="table-details">{props.items.status}</td>
            <td data-cell="bulid" className="table-details">
              <progress
                value={props.items.bulid.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="matrics" className="table-details">
              <progress
                value={props.items.matrics.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="unitest" className="table-details">
              <progress
                value={props.items.unittest.progress}
                max="100"
                className="progress"
              />
            </td>
            <td data-cell="functionaltest" className="table-details">
              <progress
                value={props.items.fuctionaltest.progress}
                max="100"
                className="progress"
              />
            </td>
          </tr>
        )
         }
      </tbody>
      <SolutionBody open={open} data={props.items} />
    
    </>
  );
};

export default SolutionCard;
