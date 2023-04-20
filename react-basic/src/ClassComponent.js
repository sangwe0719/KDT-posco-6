import React from 'react';
//import { Component } from 'react';
import PropTypes from 'prop-types';
class ClassComponent extends React.Component {

    // state 오브젝트
    state = {
        counter: 0
    };

    up = () => {
        this.setState({counter :this.state.counter + 1})
    }


  //클래스형 컴포넌트 render() 함수 필수
  render() {
    //console.log(this.props);
    //this.props = { name: "홍길동", age: "13"}
    const { name, age } = this.props;
    const { counter } = this.state;
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
        <h5>{this.state.counter}</h5>
        <button onClick={this.up}>숫자업</button>
      </div>
    );
  }
}

// {propTypes : p 소문자 주의!!}
ClassComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.string,
  };
  

export default ClassComponent;







