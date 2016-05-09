import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    /* constructor(props) {
        super(props);
        this.
        let context = this;
    }*/
  state = {
    items: [
            { text: 'txttt', index: 0 },
            { text: 'Тудушка', index: 1 },
            { text: 'Тудушка2', index: 2 },
            { text: 'Тудушка3', index: 3 }
    ],
    proposedText: '',
    wannaDelete: {}
  };
  componentDidMount() {
  }

  deleteList = () => {
    console.log('deleteList');

    let list = this.state.wannaDelete;
    let wannaDel = Object.keys(list);

    let obj = [];

    wannaDel.forEach(function (id, index) {
      let isMarked = list[id];
        // console.log(id, index, isMarked);
      if (isMarked) obj.push(id);
    });

    let items = this.state.items;
    for (let i = obj.length - 1; i >= 0; i--) {
      let item = obj[i];
      console.log('need to delete ', item);
      //this.deleteItem(item);
      items.splice(item, 1);
    };

    this.setState({ wannaDelete: {}, items });
  };

  addItem = (text) => {
    return () => {
        if (!text) return;
        let list = this.state.items;
        list.push({ text });
        this.setState({ items: list , proposedText:'' });
    };
  };

  deleteItem(index) {
      return () => {
          // var index = 0;
          let list = this.state.items;
          list.splice(index, 1);
          this.setState({ items: list });
      };
  }

  addWannaDelete = (index) => {
    return (event) => {
      let targ = document.getElementById('wannaDelete' + index).checked;
      let was = this.state.wannaDelete;

      was[index] = targ;
      this.setState({ wannaDelete: was });
    };
  };

  handleChange = (event) => {
    let value = event.target.value;
    this.setState({ proposedText: value });
  };

  render() {
    var items = this.state.items;
    var itemList;

    const deleteListButton = <input type="button" value="Delete all" onClick={this.deleteList} />;

    let list = this.state.wannaDelete;
    let wannaDel = Object.keys(list);
    let deleteList = '';

    wannaDel.forEach(function (id, index) {
      console.log(id, index);
      let isMarked = list[id];
      if (isMarked) deleteList = deleteListButton;
    });

      /*<input type="submit" value="Add" onClick={this.addItem.bind(this, 0, this.state.proposedText, 'tratata')} />*/
      let text = this.state.proposedText;
      var addItem = (
        <div>
            <input id="textField" type="text" onChange={this.handleChange} value={text} />
            <input type="submit" value="Add" onClick={this.addItem(text)} />
        </div>
    );

    if (this.state.items.length) {
        itemList = items.map((item, index) => {
          let id = 'wannaDelete' + index;
          return (
            <li key={index}>
                <input type="checkbox" id={id} name="wannaDelete"  onChange={this.addWannaDelete(index)} />
                <TodoItem item={item} />
                < a href="#" onClick={this.deleteItem(index)}> X </a>
            </li>
        );
      });
    } else {
      itemList = <li> No todos, sorry </li>;
    }

    return (
        <div>
            <ul>{itemList}</ul>
            <div>{addItem}</div>
            <div>{deleteList}</div>
        </div>
    );
  }

}
