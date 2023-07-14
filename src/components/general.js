import React, { Component } from "react";
import CvDisplay from "./cvDisplay";

class General extends Component {
  constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      phoneNum: "",
      about: "",
      address: "",
      profilePic: null,
    };
  }

  handleChange = (event) => {
    const { id, value, type } = event.target;
    if (type === "file") {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        this.setState({ profilePic: reader.result });
      };

      reader.readAsDataURL(file);
    } else {
      this.setState({ [id]: value }, () => {
        this.props.onChange(this.state);
      });
    }
  };

  render() {
    const { fullName, about, profilePic, email, phoneNum, address } =
      this.state;
console.log(profilePic);
    return (
      <div className="general">
        <h2 className="genTitle">Personal Information</h2>
        <form className="genForm">
          <label htmlFor="fullName"> Name: </label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={this.handleChange}
          />
          <label htmlFor="about" > About Me: </label>
          <textarea
            id="about"
            type="textarea"
            value={about}
            onChange={this.handleChange}
          />

          <label htmlFor="profilePic"> Photo: </label>
          <input id="profilePic" type="file" onChange={this.handleChange} />
          
          <label htmlFor="address"> Address: </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={this.handleChange}
          />

          <label htmlFor="email"> Email: </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor="phoneNum"> Phone Number: </label>
          <input
            id="phoneNum"
            type="tel"
            value={phoneNum}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default General;
