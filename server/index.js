import express  from 'express';
import serverLoader from './serverLoader';

const path = require("path");

const PORT = process.env.PORT || 3000;

// initialize the app
const app = express();
const router = express.Router();

// root / should always server our server rendered page
router.use("^/$", serverLoader);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "1d" })
);

app.use(router);
app.listen(PORT, error => {
  if (error) {
    return console.log("Something broke: ", error);
  }

  console.log("Listening on port: ", PORT);
});
