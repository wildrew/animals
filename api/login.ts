import * as express from 'express';
import Login from '../models/login';

let router = express.Router();
router.get('/', (req, res) => {
  Login.find({userId: req.query.userId} && {password: req.query.password})
  .then((foundUser) => {
    let isAdmin;
    if (foundUser.length > 0) {
       isAdmin = true;
    } else {
      isAdmin = false;
    }
    res.json({isAdmin: isAdmin});
  })
  .catch((err) => console.error(err))
});
export default router;
