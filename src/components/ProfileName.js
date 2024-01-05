import React from "react";

function ProfileName({profile, clickHandler}) {
  return (
    <div>
      <button onClick={() => clickHandler(profile)}>{profile.name}</button>
      {/* <button onClick={() => console.log(clickHandler)}>{profile.name}</button> */}
    </div>
  );
}

export default ProfileName;
