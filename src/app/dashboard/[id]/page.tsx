import type { List } from "@/interfaces/ListCharacters.interface";
import type { SingleCharacter } from "@/interfaces/SingleCharacer.interface";
import { NavBar } from "@/components/dashboard/NavBar";

type Props = {
  params: { id: number };
};

export default async function Page({ params }: Props) {
  const offSet = params.id.toString() + "0";
  console.log(offSet);

  //todo handle errors
  const get = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=10`,
    { cache: "default" }
  );
  const characters: List = await get.json();

  return (
    <>
      <NavBar />
      <main className="">
        {characters?.results?.map(async (character) => {
          const get = await fetch(character.url, { cache: "default" });
          const singleChar: SingleCharacter = await get.json();

          return (
            <div>
              {character?.name} {singleChar.weight}
            </div>
          );
        })}
      </main>
    </>
  );
}
