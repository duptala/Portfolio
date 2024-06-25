import { createWriteStream } from "fs";
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

const writeStream = createWriteStream(resolve("dist", "sitemap.xml"));

links.forEach((link) => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap)
  .then((data: Buffer) => {
    writeStream.write(data.toString());
    writeStream.end();
    console.log("Sitemap generated successfully.");
  })
  .catch(console.error);
