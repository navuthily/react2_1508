import React, { Component } from "react";

class Handle2 extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      fullname: ""
    };
  }
  _handleChange = e => {
    this.setState(
      {
        fullname: e.target.value
      },
      () => {
        console.log(this.state);
      }
    );
  };
  _handleSubmitForm = e => {
    e.preventDefault();
    const { fullname, users } = this.state;
    let newArr = [...users, fullname];
    //API
    this.setState(
      {
        users: newArr,
        fullname: ""
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <form onSubmit={e => this._handleSubmitForm(e)}>
          <input
            type="text"
            name="fullname"
            onChange={e => this._handleChange(e)}
            value={this.state.fullname}
          />
          <br />
          <button>@Add todo</button>
        </form>
        <hr />

        <ul>
          {users.map((item, index) => (
            <li key={`${item} -${index}`}>
              #{index + 1} -{item}
            </li>

          ))}
        </ul>
      </>
    );
  }
}
export default Handle2;
