import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const ImageUpload = ({ name, form, setForm, errorMessage, value }) => {
  const [preview, setPreview] = useState("");

  useEffect(() => {
    const savedPreview = localStorage.getItem("imagePreview");
    if (savedPreview) {
      setPreview(savedPreview);
    }
  }, []);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (!file) return;

    const filePreview = URL.createObjectURL(file);

    setPreview(filePreview);

    localStorage.setItem("imagePreview", filePreview);
    setForm({
      ...form,
      profileImage: e.target.files[0],
    });
  }

  function handleRemoveImage() {
    setPreview("");
    setForm({ ...form, profileImage: "" });

    localStorage.removeItem("imagePreview");
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
        <div className="w-full h-[150px] border border-[#CBD5E1] rounded-lg flex flex-col relative items-center justify-center cursor-pointer hover:border-sky-500 transition">
          <img
            className="w-14 h-14 text-slate-500"
            viewBox="0 0 24 24"
            src="./Add Image Icon@2x.svg"
          ></img>
          <span className="mt-2 text-sm text-slate-500">Add image</span>

          <input
            type="file"
            accept="image/*"
            className="absolute inset-0 opacity-0"
            onChange={handleFileChange}
          />
        </div>
      )}
      

      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};
