import express from 'express'
import 'dotenv/config';
import loginRoute from './routes/login.js';
import userRoute from './routes/user.js';
import registrationRoute from './routes/registration.js';
import profilRoute from './routes/profil.js';
import usersRoute from './routes/users.js';
const app = express();
const port = Number(process.env.APP_PORT) || 3000;
app.use(express.json())

app.use('/api/login',loginRoute);
app.use('/api/registration',registrationRoute);
app.use('/api/profil',profilRoute);
app.use('/api/user',userRoute);
app.use('/api/users',usersRoute);


app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})