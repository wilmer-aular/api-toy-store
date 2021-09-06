export default {
  app: {
    port: 5000,
    name: "api-toys",
  },
  secrectKey: "toys-api",

  mongo: {
    user: "admin",
    password: "admin",
    database: "toys",
    host: "localhost",
    port: "27017",
  },
  run: "npx nodemon"
};
