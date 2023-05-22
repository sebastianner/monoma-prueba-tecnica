import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import { readFile } from "fs";
import { fileURLToPath } from "url";
import { dirname } from "path";

export async function POST(request: NextRequest) {
  const res: { email: string; password: string } = await request.json();
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const credentialsUrl = new URL(
    "credentials.json",
    `file://${__dirname}/../../../..`
  );

  const credentials: { email: string; password: string } = await new Promise(
    (resolve, reject) => {
      readFile(credentialsUrl, "utf8", (err: any, data: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(data));
        }
      });
    }
  );
  if (
    res.email === credentials.email &&
    res.password === credentials.password
  ) {
    const token = sign({ ...credentials }, "secret", {
      expiresIn: 5000,
    });
    return NextResponse.json({ error: false, response: token });
  }
  return NextResponse.json({ error: true, response: "invalid user" });
}
