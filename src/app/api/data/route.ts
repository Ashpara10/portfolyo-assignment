import { NextRequest } from "next/server";

const URL = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user`;

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  const resp = await fetch(`${URL}/${id}`);
  const res = await resp.json();
  return Response.json({ user: res?.user });
}
