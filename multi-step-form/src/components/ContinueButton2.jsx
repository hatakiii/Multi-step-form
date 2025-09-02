export const ContinueButton2 = ({ onChangeStep, content }) => {
  return (
    <button
      onClick={onChangeStep}
      className="w-[280px] h-[44px] px-3 py-2.5 bg-neutral-900 rounded-md inline-flex justify-center items-center gap-1"
    >
      <span className="justify-start text-white text-base font-medium font-['Inter'] leading-normal">
        Continue
      </span>{" "}
      <span className="justify-start text-white text-base font-normal font-['Inter'] leading-normal">
        {content}
      </span>
      <img className="w-6 h-6" src="chevron_right.svg" alt="right"></img>
    </button>
  );
};
