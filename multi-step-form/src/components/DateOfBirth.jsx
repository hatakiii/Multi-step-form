export const DateOfBirth = ({ name, value, onChange, errorMessage }) => {
  return (
    <div className="flex ">
      <div className="flex flex-col gap-2 w-full">
        <div>
          <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
            {name}
          </span>
          <span className="text-red-500 text-sm font-semibold font-['Inter'] leading-none">
            {" "}
            *
          </span>
        </div>

        <input
          placeholder="--/--/--"
          type="date"
          className="w-full p-3 h-[44px] rounded-md outline   pr-10 focus:outline-[#0CA5E9] outline-sky-500 text-[#121316]"
          value={value}
          onChange={onChange}
        />
        {errorMessage && (
          <div className="text-red-500 text-sm">Please select a date</div>
        )}
      </div>
    </div>
  );
};
