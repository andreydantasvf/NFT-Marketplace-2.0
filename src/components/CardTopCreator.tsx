import Image from "next/image";

export function CardTopCreator() {
  return (
    <div className="flex items-center justify-evenly p-3 rounded bg-zinc-700/20">
      <Image src="/icon-creator-week.png" alt="Image of NFT icon" width={120} height={10} />

      <div className="text-center">
        <p className="text-lg font-semibold">Huluy Kawl</p>
        <span className="flex items-center gap-3">
          <Image src="/icon-eth.svg" alt="Icon ETH" width={24} height={40} />
          39.0056534 ETH
        </span>
      </div>

      <span className="text-2xl">...</span>
    </div>
  )
}