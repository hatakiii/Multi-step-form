"use client";

import {
  
  BackButton,
  ContinueButton2,
  
} from "@/components";
import { Step1 } from "@/components/Step1";
import { Step2 } from "@/components/Step2";
import { Step3 } from "@/components/Step3";
import { Final } from "@/components/Final";
import { useEffect, useState } from "react";
import React from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Home() {
  const [step, setStep] = useState("step1"); // step1, step2, step3, final
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    profileImage: "",
  });
  console.log("form", form);

  useEffect(() => {
    const savedForm = localStorage.getItem("form");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  const [errors, setErrors] = useState({});

  // Step navigation handlers with direction
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

  // Animation variants
  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 100 : -100, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -100 : 100, opacity: 0 }),
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <AnimatePresence mode="wait" custom={direction}>
        {step === "step1" && (
          <motion.div
            key="step1"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Step1
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              goToSecond={goToSecond}
            />
          </motion.div>
        )}

        {step === "step2" && (
          <motion.div
            key="step2"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Step2
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              goToThird={goToThird}
              goBackFirst={goBackFirst}
              BackButton={BackButton}
              ContinueButton2={ContinueButton2}
            />
          </motion.div>
        )}

        {step === "step3" && (
          <motion.div
            key="step3"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Step3
              form={form}
              setForm={setForm}
              errors={errors}
              setErrors={setErrors}
              goBackSecond={goBackSecond}
              goToFinal={goToFinal}
            />
          </motion.div>
        )}

        {step === "final" && (
          <motion.div
            key="final"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            <Final />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
