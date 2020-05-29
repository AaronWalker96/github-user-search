import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  async getUserInfo() {
    console.log("GetUserInfo called");
    const url = "https://api.github.com/users/";
    var userData = await fetch(url + this.state.name).then((res) => res.json());
    console.log(userData);
    document.getElementById("user-name").innerHTML = userData.name;
    document.getElementById("user-img").src = userData.avatar_url;
    document.getElementById("user-bio").innerHTML = userData.bio;
    document.getElementById("user-followers").innerHTML =
      "Followers: " + userData.followers;
    document.getElementById("user-following").innerHTML =
      "Following: " + userData.following;
    document.getElementById("user-repos").innerHTML =
      "Public Repos: " + userData.public_repos;
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Github User Search</h1>
        <form>
          <label>Username</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              this.getUserInfo();
            }}
          >
            Search
          </button>
        </form>
        <div>
          <p id="user-name"></p>
          <img className="profile-image" id="user-img"></img>
          <p id="user-bio"></p>
          <p id="user-followers"></p>
          <p id="user-following"></p>
          <p id="user-repos"></p>
        </div>
      </div>
    );
  }
}

export default App;
