import express, { Request, Response } from 'express';

const router = express.Router();

router.post('/api/users/signout', (req: Request, res: Response) => {
  // @ts-ignore
  req.session = null;

  res.send({});
});

export { router as signoutRouter };
