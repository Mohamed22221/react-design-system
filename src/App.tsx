

import './App.css'

import { FormSearch } from './components/denounceHook/FormSearch'
import { ThrottleButtonExample } from './components/throttleHook/throttleHook'

/**
 * App component
 *
 * This component renders a FormSearch component and a paragraph of text.
 * The paragraph of text is used to test HMR.
 *
 * @returns {JSX.Element} The App component
 */
function App() {


  return (
    <>
      <div>
        <h2>ThrottleHook</h2>
      <ThrottleButtonExample />
      <h2>DenounceHook</h2>
      <FormSearch />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

    </>
  )
}

export default App
