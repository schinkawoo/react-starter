import React from 'react';
import '../assets/stylesheets/base.scss';

export default class Hello extends React.Component{
  render() {
    return(
      <h1>Hello, {this.props.name}!</h1>
    )
  }
}