import React from "react";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

/**
 Author: julianjauk <jauk.j@proton.me>
 Date: 29.03.23
 Project: volleyballtournament
 **/
const API = process.env.API_URL;

export default async function handler(req: NextRequest, res: NextResponse) {
  const user = req.body;

  const response = await fetch(`${API}/login`, {
    method: "POST",
    body: JSON.stringify(user)
  })



}
