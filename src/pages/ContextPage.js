import React, { Component } from 'react';
import { ThemeProvider } from '../Context';
import ContextTypePage from './ContextTypePage';
import UseContextPage from './UseContextPage';
import ConsumerPage from './ConsumerPage';
import HocPage from './HocPage';

export default class ContextPage extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     theme: {
  //       themeColor: 'red',
  //     },
  //   };
  // }

  state = {
    theme: {
      themeColor: 'red',
    },
  };

  changeColor = () => {
    const { themeColor } = this.state.theme;
    this.setState({
      theme: { themeColor: themeColor === 'red' ? 'green' : 'red' },
    });
  };

  render() {
    const { theme } = this.state;

    return (
      <div>
        <h3 className={theme.themeColor}>ContextPage</h3>
        <button onClick={this.changeColor}>change color</button>
        <ThemeProvider value={theme}>
          <ContextTypePage />
          <UseContextPage />
          <ConsumerPage />
          <HocPage />
        </ThemeProvider>
      </div>
    );
  }
}
