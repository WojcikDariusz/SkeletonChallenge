//Required modules
import express, {Request,Router,Response,Application} from 'express';
import bodyParser from "body-parser";
import cors from "cors";

//Required routes
import routes from './routes';

const app:Application = express();
const PORT = process.env.PORT || 8080;

const router = Router()


app.use(express.json());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());

router.use("/", routes)

app.listen(PORT, ():void => {
  console.log(`Server Running at https://localhost:${PORT}`);
});