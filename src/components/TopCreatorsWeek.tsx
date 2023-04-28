import { CardTopCreator } from "./CardTopCreator";

export function TopCreatorsWeek() {
  return (
    <section className="flex flex-col items-center justify-center mt-16">
      <span>NFT Creators</span>
      <h2 className="text-3xl">Top Creators Of The Week</h2>

      <div className="grid grid-cols-3 gap-9 w-full mt-10">
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
        <CardTopCreator />
      </div>
    </section>
  )
}