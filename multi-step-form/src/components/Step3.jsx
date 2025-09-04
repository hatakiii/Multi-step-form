import React from "react";
import { motion } from "motion/react";
import {
  Hero,
  DateOfBirth,
  ImageUpload,
  BackButton,
  ContinueButton2,
} from "@/components";

export const Step3 = ({
  form,
  setForm,
  errors,
  setErrors,
  goBackSecond,
  goToFinal,
}) => {
  const validateStep3 = () => {
    const newErrors = {};
    //Validate date of birth
    if (form.dateOfBirth !== "") {
      newErrors.dateOfBirth = null;
    } else {
      newErrors.dateOfBirth = "Your field is empty";
    }
    //Validate profile image
    if (
      typeof form.profileImage === "string" &&
      form.profileImage.trim() !== ""
    ) {
      newErrors.profileImage = null;
    } else if (form.profileImage !== "") {
      newErrors.profileImage = null;
    } else {
      newErrors.profileImage = "Your field is empty";
    }
    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep3();
    setErrors(newErrors);
    if (!newErrors.dateOfBirth && !newErrors.profileImage) {
      goToFinal();
      localStorage.setItem("form", JSON.stringify(form));
      localStorage.clear();
    }
  };
  return (
    <motion.div className="w-[480px] h-[655px] p-8 bg-white rounded-lg inline-flex flex-col justify-between items-start">
      <div className="flex flex-col w-full  justify-start items-start">
        <Hero />
        <div className="flex flex-col gap-3 w-[100%]">
          <DateOfBirth
            name="Date of birth"
            value={form.dateOfBirth}
            onChange={(e) =>
              setForm({
                ...form,
                dateOfBirth: e.target.value,
              })
            }
            errorMessage={errors.dateOfBirth && errors.dateOfBirth}
          />
          <ImageUpload
            name="Profile image"
            setForm={setForm}
            form={form}
            value={form.profileImage}
            errorMessage={errors.profileImage && errors.profileImage}
          />
        </div>
      </div>
      <div className="flex w-full gap-2">
        <BackButton onChangeStep={goBackSecond} />
        <ContinueButton2 content="3/3" onChangeStep={handleNext} />
      </div>
    </motion.div>
  );
};
