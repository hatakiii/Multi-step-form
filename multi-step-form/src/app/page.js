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

import { useState } from "react";
import React from "react";

export default function Home() {
  const [step, setStep] = useState("step1"); // step1, step2, step3, final
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
          <div className="flex flex-col w-full  justify-start items-start gap-7">
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
          <ContinueButton onChangeStep={() => setStep("step2")} />
        </div>
      </div>
    );
  }
  if (step === "step2") {
    return (
      <div className="bg-black font-['Inter'] flex align-middle justify-center w-[100%] h-[100%]">
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
              />
              <TextField
                name="Password"
                value={form.password}
                onChange={(e) =>
                  setForm({
                    ...form,
                    password: e.target.value,
                  })
                }
              />
              <TextField
                name="Confirm Password"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <BackButton onChangeStep={() => setStep("step1")} />
            <ContinueButton2 onChangeStep={() => setStep("step3")} />
          </div>
        </div>
      </div>
    );
  }

  if (step === "step3") {
    return (
      <div className="bg-black font-['Inter'] flex align-middle justify-center w-[100%] h-[100%]">
        <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg inline-flex flex-col justify-between items-start">
          <div className="flex flex-col w-full  justify-start items-start">
            <Hero />
            <div className="flex flex-col gap-3 w-[100%]">
              <DateOfBirth
                name="Date of birth"
                value={form.confirmPassword}
                onChange={(e) =>
                  setForm({
                    ...form,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <ImageUpload name="Profile image" />
            </div>
          </div>
          <div className="flex w-full gap-2">
            <BackButton onChangeStep={() => setStep("step2")} />
            <ContinueButton2 onChangeStep={() => setStep("final")} />
          </div>
        </div>
      </div>
    );
  }
  if (step === "final") {
    return (
      <div className="bg-black font-['Inter'] flex align-middle justify-center w-[100%] h-[100%]">
        <div className="w-[480px] p-8 bg-white rounded-lg inline-flex flex-col justify-start items-center gap-14">
          <div className="flex flex-col justify-start items-start gap-7">
            <div className="w-96 flex flex-col justify-start items-start gap-2">
              <img className="w-14 h-14" src="pinecone.png" />
              <div className="self-stretch justify-center text-neutral-800 text-2xl font-semibold font-['Inter']">
                You're All Set 🔥
              </div>
              <div className="self-stretch justify-center text-neutral-400 text-[16px] font-normal font-['Inter']">
                We have received your submission. Thank you!
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
