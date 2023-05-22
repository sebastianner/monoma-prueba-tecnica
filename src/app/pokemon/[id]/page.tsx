import { SingleCharacter } from "@/interfaces/SingleCharacer.interface";
import Image from "next/image";

type Props = {
  params: { id: string };
};

async function Page({ params }: Props) {
  const get = await fetch(`http://localhost:3000/api/pokemon/${params.id}`, {
    cache: "default",
  });
  const character: { data: SingleCharacter } = await get.json();
  const image = character.data.sprites.front_default;

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex flex-col bg-slate-200 w-4/12 h-3/4">
        <div className="my-0 mx-auto p-10">
          <span>{character.data.name}</span>
        </div>
        <div className="flex justify-center items-center h-1/2 gap-20">
          <div>
            <span>abilities:</span>
            <ul>
              {character.data?.abilities?.map((ability, index: number) => (
                <li key={index}>{ability.ability.name}</li>
              ))}
            </ul>
            <span>weight: {character.data.weight}</span>
            <span>height: {character.data.height}</span>
          </div>
          <figure>
            <Image
              src={image}
              alt={"pokemon image"}
              height={"400"}
              width={"400"}
              placeholder="blur"
              blurDataURL={image}
              priority
            />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Page;
