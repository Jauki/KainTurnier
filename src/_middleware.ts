import { NextRequest, NextResponse } from "next/server";
import { JwtPayload, verify } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECRET;

// ka warum net gehen
export default function middleware(req: NextRequest): NextResponse {
  console.log("fooO!")
  const {cookies } =req;
  // fixme: later
  // @ts-ignore
  const jwt: string | undefined = cookies.TOKEN;

  const url = req.url;

  if(url.includes('/login')) {
    if(jwt === undefined) {
      return NextResponse.redirect('/login');
    }
    try {
      verify(jwt, secret!);
      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect('/login');
    }
  }
  return NextResponse.next();
}
