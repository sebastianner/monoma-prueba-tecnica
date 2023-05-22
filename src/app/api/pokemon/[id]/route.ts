import { NextResponse } from "next/server";

type Props = {
  params: { id: string };
};

export async function GET(_: Request, { params }: Props) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}/`);
  const data = await res.json();

  return NextResponse.json({ data });
}
