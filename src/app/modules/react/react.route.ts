import express from 'express';
import { ReactController } from './react.controller';
const router = express.Router();

router.post('/create-react', ReactController.createReact);

router.get('/:id', ReactController.getAllReactsOfSinglePost);
router.get('/', ReactController.getSingleReact);

export const ReactRoutes = router;
