import { usersRepository } from "../repository/usersData.js";

export const parseRequestBody = (req) =>
  new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      resolve(JSON.parse(body));
    });

    req.on("error", (error) => {
      reject(error);
    });
  });

export const usersController = {
  async createUser(req, res) {
    const reqBody = await parseRequestBody(req);
    req.on("error", (error) => {
      console.error(error);
      res.statusCode = 400;
      res.end();
    });
    const user = usersRepository.createUser(reqBody);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: user, error: null }));
  },
  getUsers(req, res) {
    const users = usersRepository.getUsers(req, res);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: users, error: null }));
  },
  deleteUser(_, res, userId) {
    const deleteUserResult = usersRepository.deleteUser(userId);

    if (!deleteUserResult) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          data: null,
          error: `User with id ${userId} doesn't exist`,
        })
      );
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: { sussess: true }, error: null }));
  },
  getUserHobbies(_, res, userId) {
    const user = usersRepository.getUserById(userId);

    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          data: null,
          error: `User with id ${userId} doesn't exist`,
        })
      );
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: user, error: null }));
  },
  updateUserHobbies(_, res, userId) {
    const user = usersRepository.getUserById(userId);

    if (!user) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          data: null,
          error: `User with id ${userId} doesn't exist`,
        })
      );
      return;
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ data: user, error: null }));
  },
};
