import { X } from "lucide-react";

export const ImageUpload = ({
  name,
  value,
  onChange,
  errorMessage,
  form,
  setForm,
}) => {
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) return;
    setForm({ ...form, profileImage: file });
  }

  function handleRemoveImage() {
    setForm({ ...form, profileImage: "" });
  }

  const preview =
    form.profileImage && typeof form.profileImage !== "string"
      ? URL.createObjectURL(form.profileImage)
      : form.profileImage || null;

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
      <div className="relative w-full h-[180px] border border-sky-500 rounded-lg flex flex-col items-center justify-center cursor-pointer transition">
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-[180px] object-cover rounded-lg"
            />
            {/* Delete button */}
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-black text-white p-1 rounded-full hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <input
            type="file"
            className="absolute w-full h-full opacity-0 cursor-pointer focus:outline-[#0CA5E9] outline-sky-500"
            onChange={handleImageChange}
            accept="image/*"
          />
        )}
        {!preview && (
          <div className="flex flex-col justify-center">
            <img src="./Add Image Icon@2x.svg" className="object-none"></img>
            <span className="text-sm text-slate-500 pointer-events-none">
              Add image
            </span>
          </div>
        )}
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm">Image cannot be blank</div>
      )}
    </div>
  );
};
