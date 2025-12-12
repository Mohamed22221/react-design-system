

import './App.css'
import ControlledForm from './components/ControlledForm'
import UncontroledForm from './components/UncontroledForm'

function App() {


  return (
    <>
      <div>
        <h2>Uncontroled Form</h2>
        <UncontroledForm/>
        <h2>Controlled Form</h2>
        <ControlledForm />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
