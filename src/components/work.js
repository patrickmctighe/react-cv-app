import React, { Component } from 'react';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      companyName: '',
      positionTitle: '',
      jobTasks: '',
      dateStarted: '',
      dateEnded:''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { companyName, positionTitle, jobTasks, dateStarted, dateEnded } = this.state;

    return (
      <div className='work'>
        <form className='workForm'>
          <label htmlFor='companyName'> Company Name: </label>
          <input
            id='companyName'
            type='text'
            value={companyName}
            onChange={this.handleChange}
          />

          <label htmlFor='positionTitle'> Position: </label>
          <input
            id='positionTitle'
            type='text'
            value={positionTitle}
            onChange={this.handleChange}
          />

          <label htmlFor='jobTasks'> Job Tasks: </label>
          <input
            id='jobTasks'
            type='number'
            value={jobTasks}
            onChange={this.handleChange}
          />

<label htmlFor='dateStarted'> Start Date: </label>
          <input
            id='dateStarted'
            type='date'
            value={dateStarted}
            onChange={this.handleChange}
          />

<label htmlFor='dateEnded'> End Date: </label>
          <input
            id='dateEnded'
            type='date'
            value={dateEnded}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Work;