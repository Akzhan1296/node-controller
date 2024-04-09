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

  if (req.url.match(/\/api\/users\/\w+$/) && req.method === "DELETE") {
    const userId = req.url.split("/")[3];
    return usersController.deleteUser(req, res, userId);
  }
  if (req.url.match(/\/api\/users\/\w+\/hobbies$/) && req.method === "GET") {
    const userId = req.url.split("/")[3];
    return usersController.getUserHobbies(req, res, userId);
  }

  if (req.url.match(/\/api\/users\/\w+\/hobbies$/) && req.method === "PATCH") {
    const userId = req.url.split("/")[3];
    return usersController.updateUserHobbies(req, res, userId);
  }

  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "not found" }));
}
