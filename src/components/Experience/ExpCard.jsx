import React from "react";
import "./_expCard.scss";

const ExpCard = ({
  companyLogo,
  companySubline,
  companyLink,
  postDuration,
  positionTitle,
  workDescription,
  techStack,
}) => {
  return (
    <>
      <div className="flex card">
        <div className="header">
          <div className="company">
            <img src={companyLogo} alt={companySubline} />
            <a
              className="card-link"
              href={companyLink}
              alt={companySubline}
              target={"_blank"}
              rel="noreferrer"
            >
              @{companySubline}
            </a>
          </div>
          <div className="post-duration">
            <small className="tiny-text">{postDuration}</small>
          </div>
          <div>
            <h2 className="card-title">{positionTitle}</h2>
          </div>
        </div>
        <hr className="card-hr" />
        <div className="body">
          <ul className="card-list">
            <li>{workDescription[1]}</li>
            <li>{workDescription[2]}</li>
            <li>{workDescription[3]}</li>
          </ul>
        </div>
        <hr className="card-hr" />
        <div className="footer">
          <div className="company tech-stack">
            <p>
              Tech Stack: <span>{techStack}</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpCard;
