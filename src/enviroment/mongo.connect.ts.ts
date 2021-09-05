import configApp from "./config.app";
import mongoose from "mongoose";

export default (): void => {
  const connect = async () => {
    try {
      const { user, password, database, port, host } = configApp.mongo;
      const db = `mongodb://${user}:${password}@${host}:${port}/${database}`;
      await mongoose.connect(db); //, {
      //     useNewUrlParser: true,
      //     //useCreateIndex: true,
      //     // useUnifiedTopology: true,
      //   });
      return console.info(`>>> Successfully connected to ${database} <<<`);
    } catch (err) {
      console.error("Error connecting to database: ", err);
    }
  };
  connect();
  mongoose.connection.on("disconnected", connect);
};
