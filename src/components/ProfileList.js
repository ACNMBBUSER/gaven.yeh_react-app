import axios from "axios";
import React, { Component } from "react";
import ProfileName from "./ProfileName";
import ProfileDetails from "./ProfileDetails";

class ProfileList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profiles: [],
      errorMsg: "",
      displayedProfile: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/v1/profile")
      .then((response) => {
        console.log(response);
        this.setState({ profiles: response.data.profiles });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "Error retreiving data" });
      });
  }

  displayProfileDetails(profile) {
    console.log(`profile: ${JSON.stringify(profile)}`);
    this.setState({ displayedProfile: profile });
    console.log(
      `displayedProfile: ${JSON.stringify(this.state.displayedProfile)}`
    );
  }

  render() {
    this.displayProfileDetails = this.displayProfileDetails.bind(this);
    const { profiles, errorMsg } = this.state;
    return (
      <div>
        <div>
          <h1>List of profiles</h1>
          {profiles.length
            ? profiles.map((profile) => (
                <ProfileName
                  key={profile.username}
                  profile={profile}
                  clickHandler={this.displayProfileDetails}
                ></ProfileName>
              ))
            : null}
          {errorMsg ? <div>{errorMsg}</div> : null}
        </div>
        <div>
          {Object.keys(this.state.displayedProfile).length != 0 ? (
            <ProfileDetails profile={this.state.displayedProfile} />
          ) : (
            <h2>Click button above to display profile details</h2>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileList;
