"use client";

import { TextField, ContinueButton, Hero } from "@/components";
import { use, useState } from "react";
import React from "react";

export default function Home() {
  const [step, setStep] = useState("step1"); // step2, step3
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

  if (step === "step1") {
    return (
      <div className="bg-black font-['Inter'] flex align-middle justify-center w-[100%] h-[100%]">
        <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg inline-flex flex-col justify-between items-start">
          <div className="flex flex-col w-full  justify-start items-start gap-2">
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
              />
            </div>
          </div>
          <ContinueButton onChangeStep={setStep} />
        </div>
      </div>
    );
  }
}
