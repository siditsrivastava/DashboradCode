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
            <td data-cell="name" className="table-details">
              {props.items.name.length >= 0 ? props.items.name : "N/A"}
            </td>
            <td data-cell="owner" className="table-details">
              {props.items.owner.length >= 0 ? props.items.owner : "N/A"}
            </td>
            <td data-cell="timestandard" className="table-details">
              {props.items.timestandard}
            </td>
            <td data-cell="status" className="table-details">
              {" "}
              {props.items.status}
            </td>
            <td data-cell="build" className="table-details">
            <div className="progress">
                {props.items.bulid.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.bulid.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="matrics" className="table-details">
            <div className="progress">
                {props.items.matrics.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.matrics.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="unittest" className="table-details">
            <div className="progress">
                {props.items.unittest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.unittest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="functionaltest" className="table-details">
            <div className="progress">
                {props.items.fuctionaltest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.fuctionaltest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
          </tr>
        ) : props.items.status === "Pending" ? (
          <tr
            style={{ backgroundColor: "#D0D4CA" }}
            onClick={() => setOpen(!open)}
          >
            <td data-cell="name" className="table-details">
              {props.items.name}
            </td>
            <td data-cell="owner" className="table-details">
              {props.items.owner.length <= 0 ? props.items.owner : "N/A"}
            </td>
            <td data-cell="timestandard" className="table-details">
              {props.items.timestandard}
            </td>
            <td data-cell="status" className="table-details">
              {props.items.status}
            </td>
            <td data-cell="bulid" className="table-details">
              <div className="progress">
                {props.items.bulid.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.bulid.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>       
            </td>
            <td data-cell="matrics" className="table-details">
            <div className="progress">
                {props.items.matrics.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.matrics.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="unittest" className="table-details">
            <div className="progress">
                {props.items.unittest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.unittest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="functionaltest" className="table-details">
            <div className="progress">
                {props.items.fuctionaltest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.fuctionaltest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
          </tr>
        ) : props.items.status === "Success" ? (
          <tr
            style={{ backgroundColor: "#A6CF98" }}
            onClick={() => setOpen(!open)}
          >
            <td data-cell="name" className="table-details">
              {props.items.name}
            </td>
            <td data-cell="owner" className="table-details">
              {props.items.owner}
            </td>
            <td data-cell="timstandard" className="table-details">
              {props.items.timestandard}
            </td>
            <td data-cell="status" className="table-details">
              {props.items.status}
            </td>
            <td data-cell="bulid" className="table-details">
            <div className="progress">
                {props.items.bulid.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.bulid.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="matrics" className="table-details">
            <div className="progress">
                {props.items.matrics.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.matrics.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="unittest" className="table-details">
            <div className="progress">
                {props.items.unittest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.unittest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="functionaltest" className="table-details">
            <div className="progress">
                {props.items.fuctionaltest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.fuctionaltest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
          </tr>
        ) : (
          <tr
            style={{ backgroundColor: "#8ACDD7" }}
            onClick={() => setOpen(!open)}
          >
            <td data-cell="name" className="table-details">
              {props.items.name}
            </td>
            <td data-cell="owner" className="table-details">
              {props.items.owner}
            </td>
            <td data-cell="timestandard" className="table-details">
              {props.items.timestandard}
            </td>
            <td data-cell="status" className="table-details">
              {props.items.status}
            </td>
            <td data-cell="bulid" className="table-details">
            <div className="progress">
                {props.items.bulid.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.bulid.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="matrics" className="table-details">
            <div className="progress">
                {props.items.matrics.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.matrics.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="unitest" className="table-details">
            <div className="progress">
                {props.items.unittest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.unittest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
            <td data-cell="functionaltest" className="table-details">
            <div className="progress">
                {props.items.fuctionaltest.result === "success" ? (
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                ) : props.items.fuctionaltest.result === "pending" ? (
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "50%" }}
                    aria-valuemax="100"
                  ></div>
                ) : (
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "100%" }}
                    aria-valuemax="100"
                  ></div>
                )}
              </div>
            </td>
          </tr>
        )}
      </tbody>
      <SolutionBody open={open} data={props.items} />
    </>
  );
};

export default SolutionCard;
