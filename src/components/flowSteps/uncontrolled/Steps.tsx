interface StepProps {
  goNext?: () => void;
}
export const StepOne = ({ goNext }: StepProps) => {
  return (
    <div>
      <h2>Step 1</h2>
      <p>Welcome to step one</p>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export const StepTwo = ({ goNext } : StepProps) => {
  return (
    <div>
      <h2>Step 2</h2>
      <p>This is the second step</p>
      <button onClick={goNext}>Next</button>
    </div>
  );
};


export const StepThree = ({ goNext } : StepProps) => {
  return (
    <div>
      <h2>Step 3</h2>
      <p>This is the third step</p>
      <button onClick={goNext}>Next</button>
    </div>
  );
};



