import { CardOption } from "./CardOption";

export function Create() {
  return (
    <section className="flex flex-col items-center justify-center">
      <span>Be An NFT Creator</span>
      <h2 className="text-3xl">Create & Sell Your Own NFTs</h2>

      <div className="w-full mt-8 flex gap-14 items-center justify-center">
        <CardOption 
          title="Create Artworks"
          details="Create your collection and social links and more"
          imageURL="/icon-diamond.svg"
        />
        <CardOption 
          title="Upload"
          details="Create your collection and social links and more"
          imageURL="/icon-upload.svg"
        />
        <CardOption 
          title="Listing"
          details="Create your collection and social links and more"
          imageURL="/icon-friends.svg"
        />
      </div>

      <div className="mt-8 space-x-9">
        <button className="bg-gradient-button p-5 border-none rounded-2xl text-xl">Create Now</button>
        <button className="p-5 border-2 border-[#FD01A7] rounded-2xl text-xl">Watch Videos</button>
      </div>
    </section>
  )
}