import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/todo-list'
import AppHeader from './components/app-header'


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
