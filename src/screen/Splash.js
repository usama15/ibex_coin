import React from 'react';
import Main from '../screen/Main_screen';
import Login from './Login';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <Main />,
    };
  }

  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({component: <Login />});
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }

  render() {
    return this.state.component;
  }
}
