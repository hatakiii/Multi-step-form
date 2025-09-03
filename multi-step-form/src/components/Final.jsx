export const Final = () => {
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
};
