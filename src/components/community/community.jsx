import React from "react";
import "./community.scss";

const Community = ({ community, count }) => {
  return (
    <div className="community">
      <span>{count}.</span>
      <img
        src={
          community.data.icon_img ||
          "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
        }
        alt=""
      />
      <span className="communityname">
        {community.data.display_name_prefixed}
      </span>
    </div>
  );
};

export default Community;
