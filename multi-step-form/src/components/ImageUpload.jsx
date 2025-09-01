import { useRef } from "react";

export const ImageUpload = ({ name }) => {
  const fileInputRef = useRef(null);

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <div>
        <span className="text-slate-700 text-sm font-semibold font-['Inter'] leading-none">
          {name}
        </span>
        <span className="text-red-500 text-sm font-semibold font-['Inter'] leading-none">
          {" "}
          *
        </span>
      </div>

      {/* Upload box */}
      <div
        className="w-full h-[150px] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-sky-500 transition"
        // onClick={() => fileInputRef.current.click()}
      >
        {/* Plus icon (SVG, no library needed) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-slate-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        <span className="mt-2 text-sm text-slate-500">Add image</span>
        <input
          type="file"
          accept="image/*"
          className="hidden"
          ref={fileInputRef}
          //   onChange={onChange}
        />
      </div>
    </div>
  );
};
