export const TextField = ({ name, value, onChange }) => {
  return (
    <div className="flex h-[68px]">
      <div className="self-stretch justify-end flex flex-col gap-2 w-[100%] h-[68px]">
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
          placeholder="Type something"
          className="self-stretch w-[100%] p-3 h-[44px] rounded-lg outline  outline-offset-[-1px] outline-sky-500 inline-flex justify-start items-center"
          value={value}
          onChange={onChange}
        ></input>
      </div>
    </div>
  );
};
