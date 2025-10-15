import React from "react";
import "./MyWork.css";
import work_data from "../../assets/mywork_data.js";

const MyWork = () => {
  return (
    <div id="work" className="mywork">
      <div className="work-title">My Latest & Past Work</div>

      <div className="work-container">
        {work_data.map((work, index) => {
          return (
            <img
              className="work-img"
              key={index}
              src={work.w_img}
              alt={work.w_name}
            />
          );
        })}
        <div className="show-more">
          <p>show more</p>
          <img src="" alt="--->" />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
