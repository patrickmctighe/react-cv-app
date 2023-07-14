import React, { Component } from "react";

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      titleOfStudy: "",
      dateOfStudyStart: "",
      dateOfStudyEnd: "",
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value }, () => {
      this.props.onChange(this.state);
    });
  };

  render() {
    const { schoolName, titleOfStudy, dateOfStudyStart, dateOfStudyEnd } =
      this.state;

    return (
      <div className="education">
        <h2 className="eduTitle">Education</h2>
        <form className="eduForm">
          <label htmlFor="schoolName"> School: </label>
          <input
            id="schoolName"
            type="text"
            value={schoolName}
            onChange={this.handleChange}
          />

          <label htmlFor="titleOfStudy"> Degree: </label>
          <input
            id="titleOfStudy"
            type="text"
            value={titleOfStudy}
            onChange={this.handleChange}
          />
          <div className="eduDates">
            <div className="started"><label htmlFor="dateOfStudyStart"> Started: </label>
            <input
              id="dateOfStudyStart"
              type="date"
              value={dateOfStudyStart}
              onChange={this.handleChange}
            /></div>
            {" "}
<div className="ended"><label htmlFor="dateOfStudyEnd">  Finished: </label>
            <input
              id="dateOfStudyEnd"
              type="date"
              value={dateOfStudyEnd}
              onChange={this.handleChange}
            /></div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default Education;
