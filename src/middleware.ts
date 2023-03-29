import jwt from 'jsonwebtoken';
import cookie from 'cookie';
import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "../service/AuthService";

const secret = process.env.SECRET;

export async function middleware(req: NextRequest): Promise<NextResponse> {
  const { cookies } = req;

  const url = req.url;
  const newUrl = req.nextUrl.clone();
  newUrl.pathname = '/login';

  if (url.includes('/admin')) {
     if(AuthService.getAccessToken()) {
       return NextResponse.next();
     }
     return NextResponse.rewrite(newUrl);
  }
  return NextResponse.next();
}
