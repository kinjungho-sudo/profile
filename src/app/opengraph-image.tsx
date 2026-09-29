import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { profile } from "@/data/content";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const photoData = readFileSync(join(process.cwd(), "public/profile-og.png"));
  const photoSrc = `data:image/png;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#0a0a0c",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: "680px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: 6,
              color: "#c9ff3a",
              marginBottom: 24,
            }}
          >
            PORTFOLIO
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 80,
              fontWeight: 900,
              color: "#f2f2f0",
              lineHeight: 1.1,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              fontWeight: 500,
              color: "#9a9a95",
              marginTop: 20,
            }}
          >
            {profile.roleShort}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#f2f2f0",
              marginTop: 44,
              lineHeight: 1.4,
            }}
          >
            {profile.heroLine}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 340,
            height: 460,
            borderRadius: 28,
            overflow: "hidden",
            border: "2px solid #26262a",
            flexShrink: 0,
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoSrc}
            width={340}
            height={460}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
