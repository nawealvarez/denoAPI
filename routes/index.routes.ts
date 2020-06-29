import {Router} from 'https://deno.land/x/oak/mod.ts'
import * as indexCtrl from '../controllers/index.controllers.ts'

const router = new Router();    

router.get('/', ({response}) => {
    console.log('Ejecuntando deno')
    response.body = 'Hello World'
});

router.get('/users', indexCtrl.getUsers);
router.post('/users', indexCtrl.createUser);
router.get('/users/:id', indexCtrl.getUser);

export default router;
