import {Router} from 'https://deno.land/x/oak/mod.ts'

const router = new Router();    

router.get('/', ({response}) => {
    console.log('Ejecuntando deno')
    response.body = 'Hello World'
});

export default router;
