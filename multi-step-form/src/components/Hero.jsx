export const Hero = () => {
  return (
    <div flex flex-col>
      <img className="w-14 h-14" src="pinecone.png" alt="pinecone logo" />

      <div className="self-stretch justify-center text-neutral-800 text-2xl font-semibold">
        Join Us! 😎
      </div>
      <div className="self-stretch w-full justify-center text-neutral-400 text-lg font-normal">
        Please provide all current information accurately.
      </div>
    </div>
  );
};
