import puppeteer from "puppeteer-core";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Resolve target output directory
const outputDir =
  process.env.OUTPUT_DIR || path.resolve(__dirname, "../../docs/screenshots");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Find available Edge or Chrome browser executable
function findBrowserExecutable() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH && fs.existsSync(process.env.PUPPETEER_EXECUTABLE_PATH)) {
    return process.env.PUPPETEER_EXECUTABLE_PATH;
  }

  const candidatePaths = [
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium-browser",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
  ];

  for (const candidate of candidatePaths) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  throw new Error(
    "Could not locate an Edge or Chrome executable. Set PUPPETEER_EXECUTABLE_PATH environment variable."
  );
}

// Server configuration
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

// Responsive viewports
const viewports = {
  desktop: { name: "desktop-1440", width: 1440, height: 900 },
  tablet: { name: "tablet-768", width: 768, height: 1024 },
  mobile: { name: "mobile-390", width: 390, height: 844 },
};

// Route targets
const pages = [
  { name: "homepage", path: "/" },
  { name: "project-codevault", path: "/work/codevault" },
  { name: "project-code-e-manipal", path: "/work/code-e-manipal-portal" },
  { name: "project-operation-deadlight", path: "/work/operation-deadlight" },
  { name: "project-aether-realm", path: "/work/aether-realm" },
  { name: "project-corollary", path: "/work/postgresql-query-advisor" },
  { name: "project-chandravue", path: "/work/chandravue" },
];

// Key homepage sections
const sections = [
  { name: "section-work", selector: "#work" },
  { name: "section-about", selector: "#about" },
  { name: "section-skills", selector: "#skills" },
  { name: "section-contact", selector: "#contact" },
];

async function capture() {
  const executablePath = findBrowserExecutable();
  console.log(`Using browser: ${executablePath}`);
  console.log(`Target base URL: ${baseUrl}`);
  console.log(`Saving screenshots to: ${outputDir}`);

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const isQuick = process.argv.includes("--quick");
    const activePages = isQuick ? pages.slice(0, 2) : pages;
    const activeViewports = isQuick
      ? [viewports.desktop, viewports.mobile]
      : [viewports.desktop, viewports.tablet, viewports.mobile];

    // 1. Full-page captures across viewports
    for (const pageInfo of activePages) {
      for (const vp of activeViewports) {
        const page = await browser.newPage();
        await page.setViewport({ width: vp.width, height: vp.height });
        const targetUrl = `${baseUrl}${pageInfo.path}`;
        console.log(`Capturing ${targetUrl} [${vp.name}]...`);

        try {
          await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30000 });
          const fileName = `fullpage-${pageInfo.name}-${vp.name}.png`;
          const filePath = path.join(outputDir, fileName);
          await page.screenshot({ path: filePath, fullPage: true });
          console.log(`  -> Saved: ${fileName}`);
        } catch (err) {
          console.error(`  -> Failed to capture ${targetUrl}: ${err.message}`);
        } finally {
          await page.close();
        }
      }
    }

    // 2. Scrolled section captures on desktop and mobile
    if (!isQuick) {
      for (const sec of sections) {
        for (const vp of [viewports.desktop, viewports.mobile]) {
          const page = await browser.newPage();
          await page.setViewport({ width: vp.width, height: vp.height });
          const targetUrl = `${baseUrl}/`;

          try {
            await page.goto(targetUrl, { waitUntil: "networkidle0", timeout: 30000 });
            const sectionEl = await page.$(sec.selector);
            if (sectionEl) {
              const fileName = `${sec.name}-${vp.name}.png`;
              const filePath = path.join(outputDir, fileName);
              await sectionEl.screenshot({ path: filePath });
              console.log(`  -> Saved section: ${fileName}`);
            }
          } catch (err) {
            console.error(`  -> Failed section ${sec.name}: ${err.message}`);
          } finally {
            await page.close();
          }
        }
      }

      // 3. Mobile navigation expanded capture
      const mobileNavPage = await browser.newPage();
      await mobileNavPage.setViewport({
        width: viewports.mobile.width,
        height: viewports.mobile.height,
      });

      try {
        await mobileNavPage.goto(`${baseUrl}/`, { waitUntil: "networkidle0", timeout: 30000 });
        const menuButton = await mobileNavPage.$('button[aria-controls="mobile-nav-panel"]');
        if (menuButton) {
          await menuButton.click();
          await new Promise((r) => setTimeout(r, 300));
          const filePath = path.join(outputDir, "nav-mobile-expanded-390.png");
          await mobileNavPage.screenshot({ path: filePath, fullPage: false });
          console.log("  -> Saved mobile menu state: nav-mobile-expanded-390.png");
        }
      } catch (err) {
        console.warn(`  -> Could not capture mobile menu state: ${err.message}`);
      } finally {
        await mobileNavPage.close();
      }
    }

    console.log("\nScreenshot capture finished successfully!");
  } finally {
    await browser.close();
  }
}

capture().catch((err) => {
  console.error("Screenshot capture process failed:", err);
  process.exit(1);
});
