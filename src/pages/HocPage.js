import React, { Component } from 'react';

// hoc 高阶组件
// 是个函数，参数为组件，返回值也是组件
const foo = (Comp) => (props) => {
  return (
    <div className="border">
      <Comp {...props} />
    </div>
  );
};

// function Child(props) {
//   return <div className="border">Child-{props.name}</div>;
// }

// const Foo = foo(foo(Child));

@foo
class Child extends Component {
  state = {};
  render() {
    return <div className="border">Child-{this.props.name}</div>;
  }
}

class HocPage extends Component {
  render() {
    return (
      <div>
        <h3>HocPage</h3>
        <Child name="新参数" />
      </div>
    );
  }
}

export default HocPage;
