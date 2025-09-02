import React from "react";
import { TextField, Hero, ContinueButton } from "@/components";

export const Step1 = ({ form, setForm, errors, goToSecond, setErrors }) => {
  const nameRegex = /^[A-Za-z]+$/;
  const validateStep1 = () => {
    const newErrors = {};

    // Validate First Name
    if (nameRegex.test(form.firstName)) {
      newErrors.firstName = null;
    } else if (form.firstName === "") {
      newErrors.firstName = "Your field is empty";
    } else {
      newErrors.firstName =
        "First name cannot contain special characters or numbers.";
    }

    // Validate Last Name
    if (nameRegex.test(form.lastName)) {
      newErrors.lastName = null;
    } else if (form.lastName === "") {
      newErrors.lastName = "Your field is empty";
    } else {
      newErrors.lastName =
        "Last name cannot contain special characters or numbers.";
    }

    // Validate Username
    if (form.userName !== "") {
      newErrors.userName = null;
    } else {
      newErrors.userName = "Your field is empty";
    }

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep1();
    setErrors(newErrors);
    if (!newErrors.firstName && !newErrors.lastName && !newErrors.userName) {
      goToSecond(); // Move to the next step if no errors
    }
  };

  return (
    <div className="bg-black font-['Inter'] flex align-middle justify-center w-[100%] h-[100%]">
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg inline-flex flex-col justify-between items-start">
        <div className="flex flex-col w-full justify-start items-start gap-7">
          <Hero />
          <div className="flex flex-col gap-3 w-[100%]">
            <TextField
              name="First Name"
              value={form.firstName}
              onChange={(e) =>
                setForm({
                  ...form,
                  firstName: e.target.value,
                })
              }
              errorMessage={errors.firstName && errors.firstName}
            />
            <TextField
              name="Last Name"
              value={form.lastName}
              onChange={(e) =>
                setForm({
                  ...form,
                  lastName: e.target.value,
                })
              }
              errorMessage={errors.lastName && errors.lastName}
            />
            <TextField
              name="Username"
              value={form.userName}
              onChange={(e) =>
                setForm({
                  ...form,
                  userName: e.target.value,
                })
              }
              errorMessage={errors.userName && errors.userName}
            />
          </div>
        </div>
        <ContinueButton onChangeStep={handleNext} />
      </div>
    </div>
  );
};
