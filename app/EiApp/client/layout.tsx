import React from 'react';

interface Prop {
  children: any
}

export default class TodoApp extends React.Component<Prop,{}> {
  componentWillMount() {
    //require('./css/TodoApp.import.css');
  }

  render() {
    return (
      <div>
        <h2>Electronic Institution Controller 123</h2>
        {this.props.children}
      </div>
    );
  }
}
