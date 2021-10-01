import React, { Component } from 'react';

export default class ColorBox extends Component {

  // constructor(props) {
  //   super(props)
  //   this.state = {opacity: this.props.opacity}
  //   console.log(this.state.opacity)
  // }

  state = {
    todos: [
      
    ]
  }

  render (props) {
    if (this.props.opacity >= 0.2) {
      console.log(this.props.opacity)
      return (
        <div className="color-box" style={{opacity: this.props.opacity}}>
          <ColorBox opacity={this.props.opacity - 0.1} />
        </div>
      )
    } else {
      return null
    }
  }

}

