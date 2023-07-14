import React, { Component } from "react";

class Work extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      positionTitle: "",
      jobTasks: "",
      dateStarted: "",
      dateEnded: "",
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value }, () => {
      this.props.onChange(this.state);
    });
  };

  render() {
    const { companyName, positionTitle, jobTasks, dateStarted, dateEnded } =
      this.state;

    return (
      <div className="work">
        <h2 className="workTitle">Work Experience</h2>
        <form className="workForm">
          <label htmlFor="companyName"> Company Name: </label>
          <input
            id="companyName"
            type="text"
            value={companyName}
            onChange={this.handleChange}
          />

          <label htmlFor="positionTitle"> Position: </label>
          <input
            id="positionTitle"
            type="text"
            value={positionTitle}
            onChange={this.handleChange}
          />

          <label htmlFor="jobTasks"> Job Tasks: </label>
          <input
            id="jobTasks"
            type="textarea"
            value={jobTasks}
            onChange={this.handleChange}
          />
          
<div className="workDates">
    <div className="started">
    <label htmlFor="dateStarted"> Started: </label>
          <input
            id="dateStarted"
            type="date"
            value={dateStarted}
            onChange={this.handleChange}
          /></div>
    
<div className="ended">  <label htmlFor="dateEnded"> Ended: </label>
          <input
            id="dateEnded"
            type="date"
            value={dateEnded}
            onChange={this.handleChange}
          /></div></div>
        
          
        </form>
      </div>
    );
  }
}

export default Work;
