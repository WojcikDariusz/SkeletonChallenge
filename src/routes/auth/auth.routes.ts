import { Router } from 'express';
// import controller from "../../controllers/auth.controller";

const router = Router();

router.get('/about', function (req, res) {
  res.send('Testing route');
})

export default router;
