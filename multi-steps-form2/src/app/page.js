"use client";
import { useState } from "react";

export default function Home() {
  const [step, setStep] = useState("step1");
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });
  console.log("form", form);

  const [errors, setErrors] = useState({});
  const goToSecond = () => {
    setDirection(1);
    setStep("step2");
  };

  const goToThird = () => {
    setDirection(1);
    setStep("step3");
  };
  const goToFinal = () => {
    setDirection(1);
    setStep("final");
  };

  const goBackFirst = () => {
    setDirection(-1);
    setStep("step1");
  };
  const goBackSecond = () => {
    setDirection(-1);
    setStep("step2");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {step === "step1" && <div>This is step 1</div>}
      {step === "step2" && <div>This is step 2</div>}
      {step === "step3" && <div>This is step 3</div>}
      {step === "final" && <div>This is final step</div>}
    </div>
  );
}
