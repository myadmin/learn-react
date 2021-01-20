import React, { Component } from 'react';
import { ThemeContext } from '../Context';

class ContextTypePage extends Component {
  static contextType = ThemeContext;

  render() {
    const { themeColor } = this.context;

    return (
      <div>
        <h3 className={themeColor}>this.context</h3>
      </div>
    );
  }
}

export default ContextTypePage;
