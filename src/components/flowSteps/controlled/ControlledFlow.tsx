import { StepOne, StepThree, StepTwo } from "./Steps";


type Props = {
  step: number;
  onNext: () => void;
  onPrev: () => void;
};

const ControlledFlow = ({ step, onNext, onPrev }: Props) => {
  return (
    <>
      {step === 0 && <StepOne onNext={onNext}  />}

      {step === 1 && <StepTwo onNext={onNext} onPrev={onPrev} />}

      {step === 2 && (
        <StepThree
          onNext={onNext}
          onPrev={onPrev}
        />
      )}
    </>
  );
};

export default ControlledFlow;
