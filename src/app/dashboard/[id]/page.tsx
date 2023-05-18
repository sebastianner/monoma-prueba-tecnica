import { redirect } from "next/navigation";
import type { List } from "@/interfaces/ListCharacters.interface";
import type { SingleCharacter } from "@/interfaces/SingleCharacer.interface";
import { NavBar, Card } from "@/components/dashboard";

type Props = {
  params: { id: number };
};

export default async function Page({ params }: Props) {
  if (params.id.toString() === "0") {
    redirect("/dashboard");
  }

  const offSet = params.id.toString().concat("0");

  //todo handle errors
  const get = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=10`,
    { cache: "default" }
  );
  const characters: List = await get.json();

  return (
    <>
      <NavBar />
      <main className="h-screen w-10/12 my-0 mx-auto">
        <div className="flex flex-wrap gap-4 items-center">
          {characters?.results?.map(async (character) => {
            const get = await fetch(character.url, { cache: "default" });
            const singleChar: SingleCharacter = await get.json();
            const abilities = [
              singleChar?.abilities[0]?.ability?.name,
              singleChar?.abilities[1]?.ability?.name,
            ];
            return (
              <Card
                image={singleChar.sprites.front_default}
                name={singleChar.name}
                weight={singleChar.weight}
                abilities={abilities}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
