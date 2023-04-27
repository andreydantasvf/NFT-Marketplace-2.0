import { CardNFT } from "./CardNFT";

export function Explore() {
  return (
    <section className="my-20 flex items-center justify-center flex-col">
      <span>NFT marketplace</span>
      <h2 className="text-3xl">Sportlight: Projects You Would Love</h2>

      <nav className="mt-16 w-full flex justify-between">
        <a className="bg-zinc-900 p-4 w-32 text-center rounded-xl cursor-pointer">Music</a>
        <a className="bg-zinc-900 p-4 w-32 text-center rounded-xl cursor-pointer">Art</a>
        <a className="bg-zinc-900 p-4 w-32 text-center rounded-xl cursor-pointer">Sport</a>
        <a className="bg-zinc-900 p-4 w-32 text-center rounded-xl cursor-pointer">Photography</a>
        <a className="bg-zinc-900 p-4 w-32 text-center rounded-xl cursor-pointer">Reality</a>
        <a className="bg-zinc-900 p-4 w-32 text-center rounded-xl cursor-pointer">Videos</a>
      </nav>

      <div className="mt-16 grid grid-cols-3 w-full gap-6">
        <CardNFT
          title="Rappu Apes"
          imageURL="/nft-01.png"
          value={3.48}
        />
        <CardNFT
          title="Flinstons"
          imageURL="/nft-02.png"
          value={2.08}
        />
        <CardNFT
          title="Allieyss"
          imageURL="/nft-03.png"
          value={5.00}
        />
        <CardNFT
          title="The malvado"
          imageURL="/nft-04.png"
          value={3.12}
        />
        <CardNFT
          title="Coisa ruim"
          imageURL="/nft-05.png"
          value={1.48}
        />
        <CardNFT
          title="Crystina"
          imageURL="/nft-06.png"
          value={2.75}
        />
      </div>

      <button className="bg-zinc-800 py-4 px-10 rounded-lg mt-16 font-semibold">View More</button>
    </section>
  )
}