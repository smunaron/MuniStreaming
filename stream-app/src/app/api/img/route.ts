import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");

  if (!url) {
    return new NextResponse("Missing url param", { status: 400 });
  }

  // Only proxy known safe domains
  const allowed = ["persgroep.net", "dpgmedia.net"];
  if (!allowed.some((d) => url.includes(d))) {
    return new NextResponse("Domain not allowed", { status: 403 });
  }

  try {
    const res = await fetch(url, {
      headers: {
        Referer: "https://www.vtmgo.be/",
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        Accept: "image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
      },
    });

    if (!res.ok) {
      return new NextResponse(`Upstream error: ${res.status}`, { status: res.status });
    }

    const buffer = await res.arrayBuffer();
    const contentType = res.headers.get("content-type") ?? "image/jpeg";

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
      },
    });
  } catch (err) {
    return new NextResponse("Proxy error", { status: 502 });
  }
}
