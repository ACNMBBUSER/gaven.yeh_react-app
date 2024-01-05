import React, { Component } from "react";

const ProfileDetails = ({ profile }) => {
  return (
    <div>
      <h3>Profile Details:</h3>
      <div>Username: {profile.username}</div>
      <div>Name: {profile.name}</div>
      <div>Age: {profile.age}</div>
      <div>Email: {profile.email}</div>
    </div>
  );
};

export default ProfileDetails;
