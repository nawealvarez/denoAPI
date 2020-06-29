import {Application, Router} from 'https://deno.land/x/oak/mod.ts'
import router from './routes/index.routes.ts'
   
const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods()); // Siempre que se haga una peticion va a ser permitida por deno

console.log('Server running on port', 3000);
await app.listen({port: 3000});