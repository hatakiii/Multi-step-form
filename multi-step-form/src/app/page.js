"use client";

import { TextField, ContinueButton } from "@/components";

export default function Home() {
  return (
    <div className="bg-black font-['Inter'] flex align-middle justify-center">
      <div className="w-[480px] h-[655px] p-8 bg-white rounded-lg inline-flex flex-col justify-between items-start">
        <div className="w-[100%] inline-flex flex-col justify-start items-start gap-2">
          <img className="w-14 h-14" src="pinecone.png" alt="pinecone logo" />

          <div className="self-stretch justify-center text-neutral-800 text-2xl font-semibold">
            Join Us! 😎
          </div>
          <div className="self-stretch w-full justify-center text-neutral-400 text-lg font-normal">
            Please provide all current information accurately.
          </div>
          <div className="flex flex-col gap-3 w-[100%]">
            <TextField name="First Name" />
            <TextField name="Last Name" />
            <TextField name="Username" />
          </div>
        </div>
        <ContinueButton />
      </div>
    </div>
  );
}
