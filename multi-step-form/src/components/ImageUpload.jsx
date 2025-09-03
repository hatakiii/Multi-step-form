import { useRef, useState } from "react";

export const ImageUpload = ({
  name,
  value,
  onChange,
  errorMessage,
  form,
  setForm,
}) => {
  const fileInputRef = useRef(null);

  const [preview, setPreview] = useState();

  function handleImageChange(e) {
    const file = e.target.files[0];
    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
    setForm({ ...form, profileImage: e.target.files[0] });
  }

  //Deed taliin hesgiig etseg component ruu ni zooj oruulana

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
      <div className="w-full h-[150px] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-sky-500 transition">
        <span className="mt-2 text-sm text-slate-500">Add image</span>

        {preview ? (
          <img src={preview} />
        ) : (
          <input
            type="file"
            className="opacity-0"
            onChange={handleImageChange}
          />
        )}
      </div>
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};
