export const BackButton = ({ onChangeStep }) => {
  return (
    <button
      onClick={onChangeStep}
      className="w-[128px] h-[44px] px-3 py-2.5 bg-white rounded-md inline-flex justify-center items-center gap-1 outline outline-offset-[-1px] outline-[rgba(203, 213, 225, 1)]"
    >
      <img className="w-6 h-6" src="chevron_left.svg" alt="left"></img>
      <span className="justify-start text-neutral-900 text-base font-medium font-['Inter'] leading-normal">
        Back
      </span>
    </button>
  );
};
