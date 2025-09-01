export const DateOfBirth = ({ name, value, onChange }) => {
  return (
    <div className="flex h-[68px]">
      <div className="flex flex-col gap-2 w-full h-[68px]">
        <div>
          <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
            {name}
          </span>
          <span className="text-red-500 text-sm font-semibold font-['Inter'] leading-none">
            {" "}
            *
          </span>
        </div>

        <div className="relative w-full">
          <input
            type="date"
            className="w-full p-3 h-[44px] rounded-lg outline  outline-slate-300 pr-10 focus:outline-sky-500"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};
