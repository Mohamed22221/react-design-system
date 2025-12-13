type StepProps = {
  onNext: () => void;
  onPrev: () => void;
};

type StepPropsOne = {
  onNext: () => void;

};

export const StepOne = ({ onNext  }: StepPropsOne) => {
    return (<div>
      <h2>Step 1</h2>
      <button onClick={onNext}>Next</button>
    </div>
    );
}

export const StepTwo = ({ onNext, onPrev }: StepProps) => {
    return (<div>
      <h2>Step 2</h2>
      <button onClick={onNext}>Next</button>
        <button onClick={onPrev}>Prev</button>
    </div>
    );
}



export const StepThree = ({ onNext, onPrev }: StepProps) => {
  return (
    <div>
      <h2>Step 3</h2>
      <button onClick={onPrev}>Prev</button>
      <button onClick={onNext}>Finish</button>
    </div>
  );
};


