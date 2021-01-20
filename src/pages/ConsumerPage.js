import React, { Component } from 'react';
import { ThemeConsumer } from '../Context';

class ConsumerPage extends Component {
  render() {
    return (
      <div>
        <ThemeConsumer>
          {(themeContext) => (
            <h3 className={themeContext.themeColor}>ConsumerPage</h3>
          )}
        </ThemeConsumer>
      </div>
    );
  }
}

export default ConsumerPage;
