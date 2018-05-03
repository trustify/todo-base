import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Dialog from './Dialog'

const App = () => (
  <div>
    <AddTodo />
    <Dialog />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
