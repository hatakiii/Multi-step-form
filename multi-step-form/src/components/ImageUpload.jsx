import { X } from "lucide-react";
import { useState, useEffect } from "react";

export const ImageUpload = ({
  name,
  value,
  onChange,
  errorMessage,
  form,
  setForm,
}) => {
  const [preview, setPreview] = useState(null);
  const [fileInputKey, setFileInputKey] = useState(Date.now());

  useEffect(() => {
    const savedPreview = localStorage.getItem("imagePreview");
    if (savedPreview) {
      setPreview(savedPreview);
    }
  }, []);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const filePreview = URL.createObjectURL(file);
    setPreview(filePreview);
    localStorage.setItem("imagePreview", filePreview);

    if (onChange) onChange(file);

    setFileInputKey(Date.now());
  }

  function handleRemoveImage() {
    setForm({ ...form, profileImage: "" });
    setPreview(null);
    localStorage.removeItem("imagePreview");

    setFileInputKey(Date.now());
  }

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
      <div className="relative w-full h-[180px] border border-sky-500 rounded-lg flex flex-col items-center justify-center cursor-pointer transition overflow-hidden">
        {preview ? (
          <>
            <img
              src={preview}
              alt="Selected"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-black text-white p-1 rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
              aria-label="Remove image"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center pointer-events-none">
            <img
              src="./Add Image Icon@2x.svg"
              alt="Add"
              className="w-10 h-10 mb-2 object-contain"
            />
            <span className="text-sm text-slate-500">Add image</span>
          </div>
        )}

        <input
          key={fileInputKey}
          type="file"
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={handleImageChange}
        />
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm">Image cannot be blank</div>
      )}
    </div>
  );
};
