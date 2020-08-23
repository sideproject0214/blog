import app from "./app";
import config from "./config/index";

import path from "path";
import greenlock from "greenlock-express";

const { PORT } = config;

greenlock
  .init({
    packageRoot: path.join(__dirname, "../"),
    configDir: path.join(__dirname, "../", "server/config/greenlock.d"),
    maintainerEmail: "sideproject0214@gmail.com",
    cluster: false,
  })
  .serve(app, () => {
    console.log("greenlock work");
  });

/* app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}`);
}); */
