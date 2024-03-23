import app from "./loaders/express.js";
import config from "./config/index.js";

// Start the Express server
const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

