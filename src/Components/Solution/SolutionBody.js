import React from "react";
import "./Solution.css";
import image from "../Image/computer.jpg";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import pie2d from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

const SolutionBody = (props) => {
  ReactFC.fcRoot(FusionCharts, pie2d, FusionTheme);

  const chartConfigs = {
    type: "pie2d",
    width: "99%",
    height: "180",

    showValues: 0,
    dataSource: {
      chart: {
        theme: "fusion",
        bgColor: "#ffffff",
      },
      data: props.data.fuctionaltest.piecharts,
    },
  };
  const unitCharts = {
    type: "pie2d",
    width: "99%",
    height: "180",

    showValues: 0,
    dataSource: {
      chart: {
        theme: "fusion",
        bgColor: "#ffffff",
      },
      data: props.data.unittest.piecharts,
    },
  };

  return (
    <>
      {props.open && (
        <tbody>
          {props.data.status === "Rejected" ? (
            <tr style={{ backgroundColor: "#FF8989" }}>
              <td colspan="8">
                <div className="systemData">
                  <div className="arrow-box">
                    <h6>Metrics</h6>
                    <div className="arrow-box-card">
                      <div className="right-arrow-box">
                        <p>Test</p>
                        <div className="right-arrow">
                          <p>{props.data.matrics.test}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Maintainibility</p>
                        <div className="down-arrow">
                          <p>{props.data.matrics.maintainibility}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Security</p>
                        <div className="upper-arrow">
                          <p>{props.data.matrics.security}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Workmanship</p>
                        <div className="left-arrow">
                          <p>{props.data.matrics.workmanship}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bulid">
                    <h6>Bulid</h6>
                    <div className="bulid-body">
                      <div className="image">
                        <img
                          className="bulid-img"
                          src={image}
                          alt="bulidimage"
                        />
                        <br></br>
                        <p>Debug</p>
                      </div>
                      <div className="image">
                        <img src={image} alt="bulidimage" />
                        <p>Release</p>
                      </div>
                    </div>
                    <p className="time">
                      ISODate(
                      {props.data.bulid.date + " :" + props.data.bulid.time})
                    </p>
                  </div>
                  <div className="unit-test">
                    <h6>Unit Test</h6>
                    <ReactFC {...unitCharts} />
                    <div className="code-cover-box">
                      Code Cover {props.data.unittest.codecover + "%"}
                    </div>
                  </div>
                  <div className="functional-test">
                    <h6>Functional Test</h6>
                    <ReactFC {...chartConfigs} />
                    <div className="code-cover-box">
                      Code Cover {props.data.fuctionaltest.codecover + "%"}
                    </div>
                  </div>
                  <div className="result-section">
                  <br></br>
                        <h6>
                          Result
                        </h6>
                       <h6>{props.data.dataResult.completeresult}</h6>
                       <h3>{props.data.dataResult.changeresult}</h3>
                       <button className="btn">{props.data.dataResult.resultbutton}</button>
                  </div>
                </div>
              </td>
            </tr>
          ) : props.data.status === "Pending" ? (
            <tr style={{ backgroundColor: "#D0D4CA" }}>
              <td colspan="8">
                <div className="systemData">
                  <div className="arrow-box">
                    <h6>Matrics</h6>
                    <div className="arrow-box-card">
                      <div className="right-arrow-box">
                        <p>Test</p>
                        <div className="right-arrow">
                          <p>{props.data.matrics.test}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Maintainibility</p>
                        <div className="down-arrow">
                          <p>{props.data.matrics.maintainibility}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Security</p>
                        <div className="upper-arrow">
                          <p>{props.data.matrics.security}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Workmanship</p>
                        <div className="left-arrow">
                          <p>{props.data.matrics.workmanship}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bulid">
                    <h6>Bulid</h6>
                    <div className="bulid-body">
                      <div className="image">
                        <img
                          className="bulid-img"
                          src={image}
                          alt="bulidimage"
                        />
                        <br></br>
                        <p>Debug</p>
                      </div>
                      <div className="image">
                        <img src={image} alt="bulidimage" />
                        <p>Release</p>
                      </div>
                    </div>
                    <p className="time">
                      ISODate(
                      {props.data.bulid.date + " :" + props.data.bulid.time})
                    </p>
                  </div>
                  <div className="unit-test">
                    <h6>Unit Test</h6>
                    <ReactFC {...unitCharts} />
                    <div className="code-cover-box">
                      Code Cover {props.data.unittest.codecover + "%"}
                    </div>
                  </div>
                  <div className="functional-test">
                    <h6>Functional Test</h6>
                    <ReactFC {...chartConfigs} />
                    <div className="code-cover-box">
                      Code Cover {props.data.fuctionaltest.codecover + "%"}
                    </div>
                  </div>
                  <div className="result-section">
                  <br></br>
                        <h6>
                          Result
                        </h6>
                       <h6>{props.data.dataResult.completeresult}</h6>
                       <h3>{props.data.dataResult.changeresult}</h3>
                       <button className="btn">{props.data.dataResult.resultbutton}</button>
                  </div>
                </div>
              </td>
            </tr>
          ) : props.data.status === "Success" ? (
            <tr style={{ backgroundColor: "#A6CF98" }}>
              <td colspan="8">
                <div className="systemData">
                  <div className="arrow-box">
                    <h6>Matrics</h6>
                    <div className="arrow-box-card">
                      <div className="right-arrow-box">
                        <p>Test</p>
                        <div className="right-arrow">
                          <p>{props.data.matrics.test}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Maintainibility</p>
                        <div className="down-arrow">
                          <p>{props.data.matrics.maintainibility}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Security</p>
                        <div className="upper-arrow">
                          <p>{props.data.matrics.security}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Workmanship</p>
                        <div className="left-arrow">
                          <p>{props.data.matrics.workmanship}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bulid">
                    <h6>Bulid</h6>
                    <div className="bulid-body">
                      <div className="image">
                        <img
                          className="bulid-img"
                          src={image}
                          alt="bulidimage"
                        />
                        <br></br>
                        <p>Debug</p>
                      </div>
                      <div className="image">
                        <img src={image} alt="bulidimage" />
                        <p>Release</p>
                      </div>
                    </div>
                    <p className="time">
                      ISODate(
                      {props.data.bulid.date + " :" + props.data.bulid.time})
                    </p>
                  </div>
                  <div className="unit-test">
                    <h6>Unit Test</h6>
                    <ReactFC {...unitCharts} />
                    <div className="code-cover-box">
                      Code Cover {props.data.unittest.codecover + "%"}
                    </div>
                  </div>
                  <div className="functional-test">
                    <h6>Functional Test</h6>
                    <ReactFC {...chartConfigs} />
                    <div className="code-cover-box">
                      Code Cover {props.data.fuctionaltest.codecover + "%"}
                    </div>
                  </div>
                  <div className="result-section">
                  <br></br>
                        <h6>
                          Result
                        </h6>
                       <h6>{props.data.dataResult.completeresult}</h6>
                       <h3>{props.data.dataResult.changeresult}</h3>
                       <button className="btn">{props.data.dataResult.resultbutton}</button>
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr style={{ backgroundColor: "#8ACDD7" }}>
              <td colspan="8">
                <div className="systemData">
                  <div className="arrow-box">
                    <h6>Matrics</h6>
                    <div className="arrow-box-card">
                      <div className="right-arrow-box">
                        <p>Test</p>
                        <div className="right-arrow">
                          <p>{props.data.matrics.test}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Maintainibility</p>
                        <div className="down-arrow">
                          <p>{props.data.matrics.maintainibility}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Security</p>
                        <div className="upper-arrow">
                          <p>{props.data.matrics.security}</p>
                        </div>
                      </div>
                      <div className="right-arrow-box">
                        <p>Workmanship</p>
                        <div className="left-arrow">
                          <p>{props.data.matrics.workmanship}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bulid">
                    <h6>Bulid</h6>
                    <div className="bulid-body">
                      <div className="image">
                        <img
                          className="bulid-img"
                          src={image}
                          alt="bulidimage"
                        />
                        <br></br>
                        <p>Debug</p>
                      </div>
                      <div className="image">
                        <img src={image} alt="bulidimage" />
                        <p>Release</p>
                      </div>
                    </div>
                    <p className="time">
                      ISODate(
                      {props.data.bulid.date + " :" + props.data.bulid.time})
                    </p>
                  </div>
                  <div className="unit-test">
                    <h6>Unit Test</h6>
                    <ReactFC {...unitCharts} />
                    <div className="code-cover-box">
                      Code Cover {props.data.unittest.codecover + "%"}
                    </div>
                  </div>
                  <div className="functional-test">
                    <h6>Functional Test</h6>
                    <ReactFC {...chartConfigs} />
                    <div className="code-cover-box">
                      Code Cover {props.data.fuctionaltest.codecover + "%"}
                    </div>
                  </div>
                  <div className="result-section">
                  <br></br>
                        <h6>
                          Result
                        </h6>
                       <h6>{props.data.dataResult.completeresult}</h6>
                       <h3>{props.data.dataResult.changeresult}</h3>
                       <button className="btn">{props.data.dataResult.resultbutton}</button>
                  </div>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      )}
    </>
  );
};

export default SolutionBody;
