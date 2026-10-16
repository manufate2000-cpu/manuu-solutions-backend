JavaScript

const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      app: "MANUU Solutions",
      message: "Backend is running!",
      status: "online"
    }));
  }

  if (req.url === "/api/health") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      status: "healthy",
      service: "MANUU Solutions API"
    }));
  }

  if (req.url === "/api") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      message: "Welcome to MANUU Solutions",
      features: [
        "Phone troubleshooting",
        "Education",
        "Connectivity help",
        "Small-business assistance"
      ]
    }));
  }

  res.writeHead(404);
  res.end(JSON.stringify({
    error: "Endpoint not found"
  }));
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`MANUU Solutions backend running on port ${PORT}`);
});
