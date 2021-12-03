import { Router } from 'express';
import authRouter from './auth/auth.routes';

const router = Router();

router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

router.use('/auth', authRouter);

export default router;