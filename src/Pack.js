import React, { Component } from 'react';

export default class Pack extends Component {
  state = {
    items: [
      { name:'Ускоритель', type: 'accelerator', index:0, value: 4 },
      { name:'Ускоритель', type: 'accelerator', index:1, value: 7 },
      { name:'Ускоритель', type: 'accelerator', index:2, value: 9 },
      { name:'Деньги', type: 'money', ammount: 100 }
    ],
    frees: 0
  };
    
  componentDidMount() {
    
    setInterval(() => this.setState({
      seconds: ++this.state.frees
    }), 300);

    // setInterval(function() {
    //   console.log('ssss')
    // }, 300);

    // setInterval(() => this.setState({
    //   fiveSeconds: ++this.state.fiveSeconds
    // }), 5000);
  }
  
  render() {
    var items = this.state.items
    var itemList = items.map(function (item) {
      
      item.html_url = "http://online-tournaments.org/img/topics/default.jpg"
    return (
      <li>
        <a href={item.html_url}>{item.name}</a> ({item.type}) <br/> {item.index}
      </li>
      );
    });
    
    return (
      <div>
        <ul>{itemList}</ul>
        <div>{this.state.frees}</div>
      </div>
    );
  }

}