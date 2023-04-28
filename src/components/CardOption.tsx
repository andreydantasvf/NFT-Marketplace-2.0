import Image from "next/image";

interface CardOptionProps {
  title: string;
  imageURL: string;
  details: string;
}

export function CardOption({ title, imageURL, details }: CardOptionProps) {
  return (
    <div className="bg-zinc-800 rounded-3xl py-14 px-24 flex flex-col items-center justify-center gap-5">
      <Image src={imageURL} alt={imageURL} width={95} height={95} />

      <p className="font-semibold text-lg">{title}</p>

      <span className="w-48 text-center">{details}</span>
    </div>
  )
}