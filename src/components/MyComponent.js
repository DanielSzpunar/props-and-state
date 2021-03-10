import React from 'react'

class MyComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    /*
    
    Instead of doing what is below: we can destructor the object.
    
    <h1>Todays Lesson: {this.props.title}</h1>
    <button onClick={this.props.onButtonClicked}>Click Me!</button>
      is the same as:

    const  { title, onBUttonClicked } = this.props;
    Destructuring must take place within the render method when using
    class components.

    Functional components, destructuring can take place outside of the 
    return statement.

    */
    const  { title, onButtonClicked, onButtonCountUp, onButtonCountDown, onButtonReset, count } = this.props;
    return (
      <div>
        <h1>Todays Lesson: {title}</h1>
        <button onClick={onButtonClicked}>console.log() me.</button>
        <br/>
        <button onClick={onButtonCountUp}>Count Up</button>
        <button onClick={onButtonCountDown}>Count Down</button>
        <button onClick={onButtonReset}>Reset</button>
        <p>Count: {count}</p>
      </div>
    )
  }
}
export default MyComponent
