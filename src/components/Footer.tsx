import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex items-center justify-between mt-16 pb-10">
      <div>
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo NFT" width={24} height={24} />
          <h3 className="font-semibold text-4xl">QikNFT</h3>
        </div>

        <p className="mt-4 text-lg">Unique NFTs Marketplace, rare and authentic digital creation</p>
      </div>

      <div className="flex gap-10">
        <div className="flex flex-col text-lg text-gray-300">
          <span className="font-bold text-white">Marketplace</span>
          <a href="">Explore</a>
          <a href="">NFTs</a>
          <a href="">Collectables</a>
          <a href="">Virtual Reality</a>
        </div>
        <div className="flex flex-col text-lg">
          <span className="font-bold text-white">Resources</span>
          <a href="">Blogs</a>
          <a href="">Help Center</a>
          <a href="">Partners</a>
        </div>
        <div className="flex flex-col text-lg">
          <span className="font-bold text-white">About Us</span>
          <a href="">Careers</a>
          <a href="">Support</a>
        </div>
      </div>
    </footer>
  )
}