import { X } from "lucide-react"; // optional icon library

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
      <div className="relative w-full h-[150px] border-2 border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-sky-500 transition">
        {preview ? (
          <>
            <img
              src={preview}
              alt="Preview"
              className="h-full w-full object-contain rounded-lg"
            />
            {/* Delete button */}
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              <X size={16} />
            </button>
          </>
        ) : (
          <input
            type="file"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            onChange={handleImageChange}
            accept="image/*"
          />
        )}
        {!preview && (
          <span className="mt-2 text-sm text-slate-500 pointer-events-none">
            Add image
          </span>
        )}
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm">{errorMessage}</div>
      )}
    </div>
  );
};
