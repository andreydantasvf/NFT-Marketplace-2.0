import Image from "next/image";

export function Home() {
  return (
    <section className="flex items-center justify-between h-[90%]">
      <div className="max-w-4xl">
        <h1 className="text-7xl font-semibold font-dmMono leading-snug">Collect Super Unique Digital Artworks</h1>
        <p className="mt-6">QikNFT is the world's largest NFT marketplace with over 45 thousand aritist.</p>

        <div className="mt-16 flex items-center gap-8">
          <div className="flex flex-col">
            <span className="font-semibold text-3xl">95k +</span>
            <span className="text-2xl">Artwork</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-3xl">45k +</span>
            <span className="text-2xl">Artist</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-3xl">60k +</span>
            <span className="text-2xl">Auction</span>
          </div>
        </div>
      </div>

      <Image src="/cardHome.svg" alt="Card of the NFT" width={468} height={500} />
    </section>
  )
}