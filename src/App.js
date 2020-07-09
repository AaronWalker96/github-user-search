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
    document.getElementById("user-followers").innerHTML = userData.followers;
    document.getElementById("user-following").innerHTML = userData.following;
    document.getElementById("user-repos").innerHTML = userData.public_repos;
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <div className="search-box">
          <h1>Github User Search</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
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
        </div>

        <div className="search-results">
          <div className="person-overview">
            <img className="profile-image" id="user-img" alt=""></img>
            <h2 id="user-name">Username</h2>
            <p id="user-bio">Bio</p>
          </div>
          <div className="search-item">
            <div className="search-item-content">
              <h1 id="user-followers">0</h1>
              <p>Followers</p>
            </div>
          </div>
          <div className="search-item">
            <div className="search-item-content">
              <h1 id="user-following">0</h1>
              <p>Following</p>
            </div>
          </div>
          <div className="search-item">
            <div className="search-item-content">
              <h1 id="user-repos">0</h1>
              <p>Public Repos</p>
            </div>
          </div>
        </div>

        <div id="footer">
          <p>
            Made with <span role="img" aria-label="heart">❤️</span>by{" "}
            <a href="https://github.com/AaronWalker96">Aaron Walker</a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
