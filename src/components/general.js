import React, { Component } from 'react';

class General extends Component {
  constructor() {
    super();
    this.state = {
      fullName: '',
      email: '',
      phoneNum: ''
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  render() {
    const { fullName, email, phoneNum } = this.state;

    return (
      <div className='general'>
        <form className='genForm'>
          <label htmlFor='fullName'> Name: </label>
          <input
            id='fullName'
            type='text'
            value={fullName}
            onChange={this.handleChange}
          />

          <label htmlFor='email'> Email: </label>
          <input
            id='email'
            type='text'
            value={email}
            onChange={this.handleChange}
          />

          <label htmlFor='phoneNum'> Phone Number: </label>
          <input
            id='phoneNum'
            type='number'
            value={phoneNum}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default General;