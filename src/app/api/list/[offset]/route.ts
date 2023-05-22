import { NextResponse } from "next/server";

type Props = {
  params: { offset: string };
};

export async function GET(_: Request, { params }: Props) {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${params?.offset}&limit=10`
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
