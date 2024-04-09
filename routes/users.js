import { usersController } from "../controllers/usersController.js";

export function handleRequest(req, res) {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "hello" }));
  }

  if (req.url === "/api/users" && req.method === "POST") {
    return usersController.createUser(req, res);
  }

  if (req.url === "/api/users" && req.method === "GET") {
    return usersController.getUsers(req, res);
  }

  if (req.url.startsWith("/api/users/") && req.method === "DELETE") {
    const userId = req.url.split("/")[3];
    return usersController.deleteUser(req, res, userId);
  }

  if (req.url.startsWith("/api/users/") && req.method === "GET") {
    const parts = req.url.split("/");
    const userId = parts[3];
    const hasHobbies = parts[4] === "hobbies";
    if (hasHobbies) {
      return usersController.getUserHobbies(req, res, userId);
    }
  }

  if (req.url.startsWith("/api/users/") && req.method === "PATCH") {
    const parts = req.url.split("/");
    const userId = parts[3];
    const hasHobbies = parts[4] === "hobbies";
    if (hasHobbies) {
      return usersController.updateUserHobbies(req, res, userId);
    }
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "not found" }));
}
