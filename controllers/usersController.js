import { usersRepository } from "../repository/usersData.js";

export const usersController = {
  createUser(req, res) {
    return usersRepository.createUser(req, res);
  },
  getUsers(req, res) {
    return usersRepository.getUsers(req, res);
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
