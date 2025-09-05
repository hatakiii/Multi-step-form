export const TextField = ({ name, value, onChange, type, errorMessage }) => {
  return (
    <div className="flex ">
      <div className="self-stretch justify-end flex flex-col  w-[100%] space-y-1">
        <div>
          <span className="text-sm font-semibold leading-4 text-[#334155]">
            {name}
          </span>
          <span className="text-red-500 text-sm font-semibold font-['Inter'] leading-none">
            {" "}
            *
          </span>
        </div>
        {!errorMessage ? (
          <input
            type="type"
            placeholder="Type something"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-[#CBD5E1] focus:outline-[#0CA5E9] text-[#121316]"
            value={value}
            onChange={onChange}
          ></input>
        ) : (
          <input
            type="type"
            placeholder="Type something"
            className="w-full p-3 text-base leading-5 rounded-md outline outline-red-500 focus:outline-[#0CA5E9] text-[#121316]"
            value={value}
            onChange={onChange}
          ></input>
        )}

        {errorMessage && (
          <div className="text-red-500 text-error text-xs">{errorMessage}</div>
        )}
      </div>
    </div>
  );
};
