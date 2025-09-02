export const TextField = ({ name, value, onChange, type, errorMessage }) => {
  return (
    <div className="flex ">
      <div className="self-stretch justify-end flex flex-col  w-[100%]">
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
          type="type"
          placeholder="Type something"
          className="self-stretch w-[100%] p-3 h-[44px] rounded-lg outline  outline-offset-[-1px] outline-sky-500 inline-flex justify-start items-center"
          value={value}
          onChange={onChange}
        ></input>
        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};
