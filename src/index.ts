import ServerApp from "./server";

const main = async () => {
  const server: ServerApp = new ServerApp();
  server.routes();
  server.start();
};

main();
