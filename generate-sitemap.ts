import { createWriteStream, existsSync, mkdirSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";
import { resolve } from "path";

const hostname = "https://deveshduptala.com";

const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/aboutme", changefreq: "monthly", priority: 0.7 },
  { url: "/projects", changefreq: "monthly", priority: 0.7 },
  { url: "/designs", changefreq: "monthly", priority: 0.7 },
  { url: "/blog", changefreq: "monthly", priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname });

// Ensure the `public` directory exists in the `dist` directory
const publicDir = resolve("dist", "public");
if (!existsSync(publicDir)) {
  mkdirSync(publicDir, { recursive: true });
}

const writeStream = createWriteStream(resolve(publicDir, "sitemap.xml"));

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then((data) => {
    writeStream.write(data.toString());
    writeStream.end();
    console.log("Sitemap generated successfully.");
  })
  .catch(console.error);
