import Counter from './components/Counter'
import './App.css'

function App() {
 

  return (
    <>
      <h1 className="mt-5 text-center">Counter App</h1>
      <div style={{minHeight:'70vh'}} className="d-flex justify-content-center align-items-center w-100">
        <Counter/>
      </div>
    </>
  )
}

export default App
