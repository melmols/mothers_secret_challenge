import express from "express";
import { fileURLToPath } from "url";
import compression from "compression";
import path, { dirname } from "path";
import routeNostromo from "./routes/nostromo.js";
import routeYaml from "./routes/yaml.js";
import http from "http";
import { attachWebSocket } from "./websocket.js";

const app = express();
const server = http.createServer(app);

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

app.use(express.static(`${__dirname}/public/`));
app.use(express.json({ limit: "10kb" }));
app.use(compression());

// route middleware
app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "views", "index.html");
  res.sendFile(filePath);
});

attachWebSocket(server); //connecting websocket to server
app.use("/api", routeNostromo);
app.use("/yaml", routeYaml);

const port = 80 || process.env.PORT;
// Start the server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("*", (req, res) => {
  res.status(500).json({
    status: "You hit the wrong route!",
  });
});
