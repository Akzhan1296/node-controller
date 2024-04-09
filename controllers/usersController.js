import { usersRepository } from "../repository/usersData.js";

export const usersController = {
  createUser(req, res) {
    return usersRepository.createUser(req, res);
  },
  getUsers(req, res) {
    const users = usersRepository.getUsers(req, res);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  },
  deleteUser(req, res, userId) {
    return usersRepository.deleteUser(req, res, userId);
  },
  getUserHobbies(req, res, userId) {
    return usersRepository.updateUserHobbies(req, res, userId);
  },
  updateUserHobbies(req, res, userId) {
    return usersRepository.updateUserHobbies(req, res, userId);
  },
};
