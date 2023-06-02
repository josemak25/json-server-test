const { createRandomUser } = require("./createRandomUser");
const { createRandomTransaction } = require("./createRandomTransaction");

const db = { user: [], transaction: [] };

const users = createRandomUser();
db.user.push(...users);

const transactions = createRandomTransaction();
db.transaction.push(...transactions);

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);

// Add custom routes before JSON Server router
server.post("/payment/success", (_req, res) => {
  res.jsonp({ message: "payment successful" });
});

// Add custom routes before JSON Server router
server.post("/payment/fail", (_req, res) => {
  res.jsonp({ message: "payment failed" });
});

// Add custom routes before JSON Server router
server.post("/transaction/:id", (_req, res) => {
  res.jsonp({ message: "transaction created successfully" });
});

// Add custom routes before JSON Server router
server.get("/transaction/:id", (req, res) => {
  const transaction = db.transaction.find(
    ({ transactionId }) => transactionId === req.params.id
  );

  res.jsonp(transaction || {});
});

// Use default router
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});
