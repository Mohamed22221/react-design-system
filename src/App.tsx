import { useState } from "react";
import "./App.css";
import {
  StepOne,
  StepThree,
  StepTwo,
} from "./components/flowSteps/uncontrolled/Steps";
import { UncontrolledFlow } from "./components/flowSteps/uncontrolled/UncontrolledFlow";
import ControlledForm from "./components/form/ControlledForm";
import UncontroledForm from "./components/form/UncontroledForm";
import ControlledFlow from "./components/flowSteps/controlled/ControlledFlow";

function App() {
  const [step, setStep] = useState(0);
  return (
    <>
      <div>
        <h2>Uncontroled Form</h2>
        <UncontroledForm />
        <h2>Controlled Form</h2>
        <ControlledForm />
        <div>
          <h2>Uncontroled Flow</h2>
          <UncontrolledFlow>
            <StepOne />
            <StepTwo />
            <StepThree />
          </UncontrolledFlow>
          <h2>Controlled Flow</h2>
          <ControlledFlow
            step={step}
            onNext={() => setStep((s) => s + 1)}
            onPrev={() => setStep((s) => s - 1)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
