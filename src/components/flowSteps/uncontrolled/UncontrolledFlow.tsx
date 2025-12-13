import React, { useState } from "react";

interface UncontrolledFlowProps {
  children: React.ReactNode;
}
interface StepProps {
  goNext: () => void;
}
export const UncontrolledFlow = ({ children } : UncontrolledFlowProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const goNext = () => {
    setCurrentStepIndex(currentStepIndex + 1);
  };

  const currentChild =
    React.Children.toArray(children)[currentStepIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goNext } as StepProps);
  }

  return currentChild;
};
