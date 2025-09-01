export const Hero = () => {
  return (
    <div className="flex flex-col w-[416px] h-[129px] pb-7">
      <img className="w-14 h-14" src="pinecone.png" alt="pinecone logo" />

      <div className="self-stretch justify-center text-neutral-800 text-2xl font-semibold">
        Join Us! 😎
      </div>
      <div className="self-stretch w-full justify-center text-neutral-400 text-[17px] font-normal">
        Please provide all current information accurately.
      </div>
    </div>
  );
};
