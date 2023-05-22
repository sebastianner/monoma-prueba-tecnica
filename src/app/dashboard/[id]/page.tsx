import { redirect } from "next/navigation";
import type { List } from "@/interfaces/ListCharacters.interface";
import type { SingleCharacter } from "@/interfaces/SingleCharacer.interface";
import { Card } from "@/components/dashboard";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { id: string };
};

export default async function Page({ params }: Props) {
  if (params.id === "0") {
    redirect("/dashboard");
  }

  const offset = params.id.concat("0");

  const get = await fetch(`http://localhost:3000/api/list/${offset}`);

  const characters: List = await get.json();

  if (characters?.data.next === null) {
    notFound();
  }

  return (
    <>
      {characters?.data?.results?.map(async (character, index) => {
        const get = await fetch(character.url, { cache: "default" });
        const singleChar: SingleCharacter = await get.json();
        const abilities = [
          singleChar?.abilities[0]?.ability?.name,
          singleChar?.abilities[1]?.ability?.name,
        ];
        return (
          <Link href={`/pokemon/${singleChar.id}/`} key={index}>
            <Card
              image={singleChar.sprites.front_default}
              name={singleChar.name}
              weight={singleChar.weight}
              abilities={abilities}
            />
          </Link>
        );
      })}
    </>
  );
}
