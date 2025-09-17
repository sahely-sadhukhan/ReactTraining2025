import './App.css'
import TransactionMgr from './TransactionMgr'
import { Provider } from 'react-redux';
import { appStore } from './store';

function App() {

  return (
    <>
      <h1>ABC Bank Portal</h1>
      
      <Provider store={appStore}>
        <TransactionMgr />
      </Provider>
    </>
  )
}

export default App
