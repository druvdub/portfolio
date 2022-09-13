import React from "react";
import "./_projCards.scss";
import { HiOutlineExternalLink } from "react-icons/hi";

const ProCard = ({
  cardTitle,
  cardDescription,
  cardSource,
  cardBoolean,
  cardDemo,
  techStack,
}) => {
  return (
    <>
      <div className="card card-project">
        <div className="header">
          <h2 className="card-title padding-b">{cardTitle}</h2>
        </div>
        <div className="body fle-g">{cardDescription}</div>
        <div className="footer card-links">
          <div className="company tech-stack float-left">
            <p>
              Tech Stack: <span>{techStack}</span>
            </p>
          </div>
          <hr className="card-hr pro-color" />
          <div className="source-demo">
            <a
              href={cardSource}
              className="card-href"
              target={"_blank"}
              rel="noreferrer"
            >
              Source <HiOutlineExternalLink />
            </a>
            {cardBoolean ? (
              <a
                href={cardDemo}
                className="card-href"
                target={"_blank"}
                rel="noreferrer"
              >
                Website <HiOutlineExternalLink />
              </a>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProCard;
