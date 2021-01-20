import React, { Component } from 'react';
import FieldContext from './FieldContext';

class Filed extends Component {
  static contextType = FieldContext;

  getControlled = () => {
    const { setFieldsValue, getFieldValue } = this.context;
    const { name } = this.props;
    return {
      value: getFieldValue(name),
      onChange: (e) => {
        const newValue = e.target.value;
        setFieldsValue({ [name]: newValue });
      },
    };
  };

  onStoreChange = () => {
    this.forceUpdate();
  };

  render() {
    const { children } = this.props;
    const returnChildNode = React.cloneElement(children, this.getControlled());
    return returnChildNode;
  }

  componentDidMount() {
    this.context.registerField(this);
  }
}

export default Filed;
