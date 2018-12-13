import React from 'react';
import {createEmployer} from '../services/register';

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', email: '', name: '', password: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      let id = event.target.id
      if (id === 'username'){
        this.setState({username: event.target.value})
      }
      else if (id === 'name'){
        this.setState({name: event.target.value});
      }
      else if (id === 'email'){
        this.setState({email: event.target.value});
      }
      else if (id === 'password'){
        this.setState({password: event.target.value});
      }
    }
  
    handleSubmit(event){
      createEmployer(this.state)
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" id='username' value={this.state.username} onChange={this.handleChange}/>
          </label>
          <label>
            Nombre:
            <input type="text" id='name' value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" id='email' value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Password:
            <input type="text" id='password' value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }