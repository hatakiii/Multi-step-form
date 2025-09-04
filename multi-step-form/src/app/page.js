"use client";

import {
  TextField,
  ContinueButton,
  Hero,
  BackButton,
  ContinueButton2,
  DateOfBirth,
  ImageUpload,
} from "@/components";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import { Final } from "@/components/Final";
import { useState } from "react";
import React from "react";

export default function Home() {
  const [step, setStep] = useState("step1"); // step1, step2, step3, final

  const savedForm =
    typeof window !== "undefined" ? localStorage.getItem("form") : null;
  const saveForm = JSON.parse(savedForm);

  const [form, setForm] = useState(
    savedForm
      ? saveForm
      : {
          firstName: "",
          lastName: "",
          userName: "",
          email: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
          dateOfBirth: "",
          profileImage: null,
        }
  );

  // localStorage.setItem("savedForm", JSON.stringify(form));

  console.log("form ajillaj bnu?", form);
  const [errors, setErrors] = useState({});

  const goToSecond = () => {
    setStep("step2");
  };

  const goToThird = () => {
    setStep("step3");
  };

  const goBackFirst = () => {
    setStep("step1");
  };

  const goToFinal = () => {
    setStep("final");
  };

  const goBackSecond = () => {
    setStep("step2");
  };

  if (step === "step1") {
    return (
      <Step1
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
        goToSecond={goToSecond}
      />
    );
  }
  if (step === "step2") {
    return (
      <Step2
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
        goToThird={goToThird}
        BackButton={BackButton}
        goBackFirst={goBackFirst}
        ContinueButton2={ContinueButton2}
      />
    );
  }

  if (step === "step3") {
    return (
      <Step3
        form={form}
        setForm={setForm}
        errors={errors}
        setErrors={setErrors}
        goBackSecond={goBackSecond}
        goToFinal={goToFinal}
      />
    );
  }
  if (step === "final") {
    return <Final />;
  }
}
