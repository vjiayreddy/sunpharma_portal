import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getSession } from "next-auth/react";
import subdomains from "./subdomains.json";
import { APP_ROUTES } from "./utils/routes";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get("host");
  const requestForNextAuth = {
    headers: {
      cookie: request.headers.get("cookie") ?? undefined,
    },
  };
  const session = await getSession({ req: requestForNextAuth });
  //const allowedDomains = ["localhost:3000"];
  //const subdomain = hostname.split(".")[0];
  //const isAllowedDomain = allowedDomains.some((domain) =>
  //hostname.includes(domain)
  //);
  //const subdomainData = subdomains.find((d) => d.subdomain === subdomain);
  //if (isAllowedDomain && !subdomains.some((d) => d.subdomain === subdomain)) {
  //return NextResponse.next();
  //}
  // if (!session && url.pathname !== APP_ROUTES.LOGIN) {
  //   return NextResponse.redirect(new URL(APP_ROUTES.LOGIN, request.url));
  // }

  //if (subdomainData) {
  //return NextResponse.rewrite(
  //new URL(`/${subdomain}${url.pathname}`, request.url)
  //);
  //}
  //return new Response(null, { status: 404 });

  if (!session && url.pathname !== APP_ROUTES.LOGIN) {
    return NextResponse.redirect(new URL(APP_ROUTES.LOGIN, request.url));
  } else if (session && url.pathname === APP_ROUTES.LOGIN) {
    return NextResponse.redirect(new URL(APP_ROUTES.HOME, request.url));
  } else {
    return NextResponse.next();
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/signin","/home"],
};
