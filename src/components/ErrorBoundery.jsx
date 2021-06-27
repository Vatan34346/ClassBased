import { Component } from "react";

class ErrorBoundery extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    // trigered when one of child component throw error
    this.setState({hasError:true});
  }

  render() {

    if(this.state.hasError===true)
    {
        return <p>Womthing whent wrong</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundery;
