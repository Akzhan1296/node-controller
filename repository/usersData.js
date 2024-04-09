import { v4 as uuidv4 } from "uuid";

const users = [];

export const usersRepository = {
  createUser(reqBody) {
    const userId = uuidv4();
    const user = {
      user: { ...reqBody, id: userId },
      links: {
        self: `api/users/${userId}/hobbies`,
        user: `api/users/${userId}`,
      },
    };
    users.push(user);
    return user;
  },
  getUserById(userId) {
    return users.find((user) => user.user.id === userId);
  },
  getUsers() {
    return users;
  },
  deleteUser(userId) {
    const userIndex = users.findIndex((user) => user.user.id === userId);
    if (userIndex === -1) {
      return null;
    }
    return users.splice(userIndex, 1);
  },
  updateUserHobbies() {},
};
