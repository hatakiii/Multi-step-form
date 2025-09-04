import { useRef, useState } from "react";
import { X } from "lucide-react";

export const ImageUpload = ({ name, form, setForm, errorMessage }) => {
  const fileInputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  // Handle file selection
  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    // Preview for UI
    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);

    // Save file itself to parent form state
    setForm({ ...form, profileImage: file });
  }

  // Remove selected image
  function handleRemoveImage() {
    setPreview(null);
    setForm({ ...form, profileImage: null }); // clear from form
    fileInputRef.current.value = ""; // reset input
  }

  return (
    <div className="flex flex-col gap-2 w-full">
      {/* Label */}
      <div>
        <span className="text-slate-700 text-sm font-semibold">{name}</span>
        <span className="text-red-500 text-sm font-semibold"> *</span>
      </div>

      {/* Upload box */}
      {preview ? (
        <div className="relative w-full h-[150px]">
          <img
            src={preview}
            alt="preview"
            className="w-full h-full object-cover rounded-lg"
          />
          <button
            type="button"
            onClick={handleRemoveImage}
            className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
          >
            <X size={16} />
          </button>
        </div>
      ) : (
        <div
          className="w-full h-[150px] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-sky-500 transition"
          onClick={() => fileInputRef.current.click()}
        >
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
        </div>
      )}

      {/* Hidden input */}
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};
