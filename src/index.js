import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list'

const AppHeader = () => {
  return (
    <h1>My Todo list</h1>
  )
};

const SearchPanel = () => {
  return <input placeholder="search"/>
};

const App = () => {

  return (
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList/>
    </div>
  )
};

ReactDOM.render(<App/>, document.getElementById('root'));
