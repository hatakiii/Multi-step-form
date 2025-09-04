import React from "react";
import { TextField, Hero, ContinueButton } from "@/components";

export const Step2 = ({
  form,
  setForm,
  errors,
  goToThird,
  setErrors,
  BackButton,
  ContinueButton2,
  goBackFirst,
}) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{8}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const validateStep2 = () => {
    const newErrors = {};

    // Validate Email
    if (emailRegex.test(form.email)) {
      newErrors.email = null;
    } else if (form.firstName === "") {
      newErrors.email = "Your field is empty";
    } else {
      newErrors.email = "Please provide a valid email address.";
    }

    // Validate Phone Number
    if (phoneRegex.test(form.phoneNumber)) {
      newErrors.phoneNumber = null;
    } else if (form.lastName === "") {
      newErrors.phoneNumber = "Your field is empty";
    } else {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    // Validate Password
    if (passwordRegex.test(form.password)) {
      newErrors.password = null;
    } else if (form.password === "") {
      newErrors.password = "Your field is empty";
    } else {
      newErrors.password = "Password must include letters and numbers.";
    }

    // Validate Confirm Password
    if (form.password === form.confirmPassword) {
      newErrors.confirmPassword = null;
    } else if (form.confirmPassword === "") {
      newErrors.confirmPassword = "Your field is empty";
    } else {
      newErrors.confirmPassword = "Passwords do not match. Please try again.";
    }

    return newErrors;
  };

  const handleNext = () => {
    const newErrors = validateStep2();
    setErrors(newErrors);
    if (
      !newErrors.email &&
      !newErrors.phoneNumber &&
      !newErrors.password &&
      !newErrors.confirmPassword
    ) {
      goToThird();
      localStorage.setItem("form", JSON.stringify(form));
    }
  };
  return (
    <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg inline-flex flex-col justify-between items-start">
      <div className="flex flex-col w-full  justify-start items-start">
        <Hero />
        <div className="flex flex-col gap-3 w-[100%]">
          <TextField
            name="Email"
            value={form.email}
            onChange={(e) =>
              setForm({
                ...form,
                email: e.target.value,
              })
            }
            errorMessage={errors.email && errors.email}
          />
          <TextField
            name="Phone Number"
            value={form.phoneNumber}
            onChange={(e) =>
              setForm({
                ...form,
                phoneNumber: e.target.value,
              })
            }
            errorMessage={errors.phoneNumber && errors.phoneNumber}
          />
          <TextField
            type="password"
            name="Password"
            value={form.password}
            onChange={(e) =>
              setForm({
                ...form,
                password: e.target.value,
              })
            }
            errorMessage={errors.password && errors.password}
          />
          <TextField
            type="password"
            name="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) =>
              setForm({
                ...form,
                confirmPassword: e.target.value,
              })
            }
            errorMessage={errors.confirmPassword && errors.confirmPassword}
          />
        </div>
      </div>
      <div className="flex w-full gap-2">
        <BackButton onChangeStep={goBackFirst} />
        <ContinueButton2 content="2/3" onChangeStep={handleNext} />
      </div>
    </div>
  );
};
