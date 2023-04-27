import Image from "next/image";

interface CardNFTProps {
  title: string;
  imageURL: string;
  value: number;
}

export function CardNFT({ title, imageURL, value }: CardNFTProps) {
  return (
    <div className="p-6 bg-zinc-900 rounded-2xl w-fit">
      <Image src={imageURL} alt="Image NFT" width={360} height={360} />

      <div className="mt-7 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-xl">{title}</p>
          <p className="font-semibold text-xl">Created by Daq</p>
          <span className="text-sm text-gray-400">Current Bid</span>
          <span className="font-semibold text-xl">{value.toFixed(2)} ETH</span>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image src="https://github.com/andreydantasvf.png" alt="Image of Andrey" width={48} height={48} className="rounded-full" />
          <span className="text-sm text-gray-400">Ending In</span>
          <span className="font-semibold text-xl">10h 30m 06s</span>
        </div>
      </div>
    </div>
  )
}