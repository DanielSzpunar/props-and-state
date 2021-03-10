import React from "react"
import MyComponent from "./components/MyComponent"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
    this.countUp = this.countUp.bind(this)
    this.countDown = this.countDown.bind(this)
    this.countReset = this.countReset.bind(this)
    this.onClickBtn = this.onClickBtn.bind(this)
  }
  countUp() {
    console.log(this.state.count)
    this.setState({
      count: this.state.count + 1
    })
  }
  countDown() {
    this.setState({
      count: this.state.count - 1
    })
  }
  countReset() {
    this.setState({
      count: 0
    })
  }
  onClickBtn() {
    console.log("Button has been clicked.")
  }
  render() {
    return (
      <div>
        <MyComponent 
          title="React Props & State"
          onButtonClicked={this.onClickBtn}
          onButtonCountUp={this.countUp}
          onButtonCountDown={this.countDown}
          onButtonReset={this.countReset}
          count={this.state.count}
         />
      </div>
    )
  }
}
export default App
