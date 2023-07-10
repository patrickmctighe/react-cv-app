import React, { Component } from 'react';

class Education extends Component {
  constructor() {
    super();
    this.state = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudyStart: '',
      dateOfStudyEnd: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { schoolName,titleOfStudy, dateOfStudyStart, dateOfStudyEnd} = this.state;

    return (
      <div className='education'>
        <form className='eduForm'>
          <label htmlFor='schoolName'> School: </label>
          <input
            id='schoolName'
            type='text'
            value={schoolName}
            onChange={this.handleChange}
          />

          <label htmlFor='titleOfStudy'> Degree: </label>
          <input
            id='titleOfStudy'
            type='text'
            value={titleOfStudy}
            onChange={this.handleChange}
          />

          <label htmlFor='dateOfStudyStart'> Date Started: </label>
          <input
            id='dateOfStudyStart'
            type='date'
            value={dateOfStudyStart}
            onChange={this.handleChange}
          />

<label htmlFor='dateOfStudyEnd'> Date Finished: </label>
          <input
            id='dateOfStudyEnd'
            type='date'
            value={dateOfStudyEnd}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Education;