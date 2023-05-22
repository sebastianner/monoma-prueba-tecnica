import { redirect } from "next/navigation";
import type { List } from "@/interfaces/ListCharacters.interface";
import type { SingleCharacter } from "@/interfaces/SingleCharacer.interface";
import { Card } from "@/components/dashboard";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  if (params.id === "0") {
    redirect("/dashboard");
  }

  const offset = params.id.concat("0");

  //todo handle errors
  const get = await fetch(`http://localhost:3000/api/list/${offset}`);
  const characters: List = await get.json();
  const errorNode = (
    <div className="text-white">
      limit of pokemons reached: {characters.data.count} Pokemons available
    </div>
  );

  return (
    <>
      {characters?.data.next === null ? (
        errorNode
      ) : (
        <>
          {characters?.data?.results?.map(async (character, index) => {
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
                key={index}
              />
            );
          })}
        </>
      )}
    </>
  );
}
