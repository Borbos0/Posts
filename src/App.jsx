import React from 'react'
import { Provider } from 'react-redux'
import 'antd/dist/reset.css'
import { store } from './store/store'
import PostsList from './components/posts/PostsList'

function App() {
  return (
    <Provider store={store}>
      <div style={{ maxWidth: 600, margin: '32px auto' }}>
        <h2>Новости</h2>
        <PostsList />
      </div>
    </Provider>
  )
}

export default App
