import Image from "next/image";

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/logo.svg" alt="Logo NFT" width={24} height={24} />
        <h3 className="font-semibold text-xl">QikNFT</h3>
      </div>

      <nav className="space-x-8 text-xl hidden lg:block">
        <a href="#">Explore</a>
        <a href="#">Stats</a>
        <a href="#">Resourves</a>
        <a href="#">Artist</a>
        <a href="#">Create</a>
      </nav>

      <button className="bg-gradient-button p-5 border-none rounded-2xl text-xl hidden md:block">Connect wallet</button>
    </header>
  )
}