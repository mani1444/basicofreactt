// Task 1: UserListComponent
import React, { useState } from 'react';

const UserListComponent = () => {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    const newUser = {
      id: users.length + 1,
      name: 'John Doe',
      email: 'john@example.com',
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.email}`}</li>
        ))}
      </ul>
      <button onClick={addUser}>Add User</button>
    </div>
  );
};

// Task 2: Product Component
import { Component } from 'react'; // Only import Component from 'react'

class Product extends Component {
  state = {
    isInStock: true,
  };

  toggleStock = () => {
    this.setState((prevState) => ({ isInStock: !prevState.isInStock }));
  };

  render() {
    return (
      <div>
        <h2>Product</h2>
        <p>{`Product Name: ABC Product`}</p>
        <p>{this.state.isInStock ? 'In Stock' : 'Out of Stock'}</p>
        <button onClick={this.toggleStock}>Toggle Stock</button>
      </div>
    );
  }
}

// Task 3: FilteredUsers Component

const FilteredUsers = ({ userList }) => {
  const filteredUsers = userList.filter((user) => user.name.startsWith('A'));

  return (
    <div>
      <h2>Filtered Users</h2>
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{`${user.name} - ${user.email}`}</li>
        ))}
      </ul>
    </div>
  );
};

// Task 4: App Component

const App = () => {
  return (
    <div>
      <UserListComponent />
      <Product />
      {/* Assuming UserListComponent is defined in the same file */}
      <FilteredUsers userList={[]} />
    </div>
  );
};

export default App;
