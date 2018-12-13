import React from 'react';
import {createSearch} from '../services/postSearch';

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {username: '', email: '', name: '', password: ''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      let id = event.target.id
      if (id === 'technicalOne'){
        this.setState({username: event.target.value})
      }
      else if (id === 'technicalTwo'){
        this.setState({name: event.target.value});
      }
      else if (id === 'yearsExpirence'){
        this.setState({email: event.target.value});
      }
      else if (id === 'spanish'){
        this.setState({password: event.target.value});
      }
      else if (id === 'english'){
        this.setState({password: event.target.value});
      }
      else if (id === 'portuguese'){
        this.setState({password: event.target.value});
      }
      else if (id === 'otherLanguages'){
        this.setState({password: event.target.value});
      }
    }
  
    handleSubmit(event){
        createSearch(event.target.value);
        event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Técnica uno
            <input type="text" id='technicalOne' value={this.state.username} onChange={this.handleChange}/>
          </label>
          <label>
            Técnica dos
            <input type="text" id='technicalTwo' value={this.state.name} onChange={this.handleChange} />
          </label>
          <label>
            Años de experiencia
            <input type="text" id='yearsExpirence' value={this.state.email} onChange={this.handleChange} />
          </label>
          <label>
            Hablar español
            <input type="text" id='spanish' value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>
            Hablar inglés
            <input type="text" id='english' value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>
            Hablar portugués
            <input type="text" id='portuguese' value={this.state.password} onChange={this.handleChange} />
          </label>
          <label>
            Otro Idioma
            <input type="text" id='otherLanguages' value={this.state.password} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }