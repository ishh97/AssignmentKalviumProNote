import React, { Component } from 'react' 


export default class Editor extends Component {
    constructor(props) {
      super(props)
      this.state = {
         value: ""
      };
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
  render() {
    return (
      <div className='container'>
        <div className='input-box'>
            <h3>Input</h3>
            <textarea className='input' onChange={this.handleChange} defaultValue={this.state.value}/>
        </div>
        <div className="output-box">
            <h3>Pro Note</h3>
            <div className="output">
                {this.state.value}
            </div>
        </div>
      </div>
    )
  }
}