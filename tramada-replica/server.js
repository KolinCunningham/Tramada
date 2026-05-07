const { createServer } = require("node:http");
const { readFile, writeFile, mkdir } = require("node:fs/promises");
const { createReadStream } = require("node:fs");
const { extname, join, normalize } = require("node:path");

const root = __dirname;
const dataDir = join(root, "data");
const stateFile = join(dataDir, "state.json");
const port = Number(process.env.PORT || 4173);
const host = process.env.HOST || "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

async function readBody(request) {
  let body = "";
  for await (const chunk of request) {
    body += chunk;
    if (body.length > 8_000_000) throw new Error("Request body too large");
  }
  return body;
}

async function handleState(request, response) {
  if (request.method === "GET") {
    try {
      const state = await readFile(stateFile, "utf8");
      response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      response.end(state);
    } catch (error) {
      sendJson(response, 200, { bookings: [] });
    }
    return;
  }

  if (request.method === "PUT") {
    try {
      const payload = JSON.parse(await readBody(request));
      if (!payload || !Array.isArray(payload.bookings)) {
        sendJson(response, 400, { error: "Expected a bookings array" });
        return;
      }
      await mkdir(dataDir, { recursive: true });
      await writeFile(stateFile, JSON.stringify(payload, null, 2), "utf8");
      sendJson(response, 200, { ok: true, savedAt: new Date().toISOString() });
    } catch (error) {
      sendJson(response, 500, { error: error.message });
    }
    return;
  }

  sendJson(response, 405, { error: "Method not allowed" });
}

function serveStatic(request, response) {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const requestPath = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = normalize(join(root, requestPath));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  const stream = createReadStream(filePath);
  stream.on("error", () => {
    response.writeHead(404);
    response.end("Not found");
  });
  response.writeHead(200, { "Content-Type": mimeTypes[extname(filePath)] || "application/octet-stream" });
  stream.pipe(response);
}

createServer((request, response) => {
  if (request.url.startsWith("/api/state")) {
    handleState(request, response);
    return;
  }
  serveStatic(request, response);
}).listen(port, host, () => {
  console.log(`Tramada replica running at http://${host}:${port}/`);
});
