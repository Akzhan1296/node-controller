import http from "http";
import { handleRequest } from "./routes/users.js";

const PORT = 8000;
const server = http.createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server is started in port  ${PORT}`);
});
