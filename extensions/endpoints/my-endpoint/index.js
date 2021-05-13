module.exports = function registerEndpoint(router) {
  router.get("/", (req, res) => res.send("Hello, World!"));
  router.get("/intro", (req, res) => res.send("Nice to meet you."));
  router.get("/goodbye", (req, res) => res.send("Goodbye!"));
};
