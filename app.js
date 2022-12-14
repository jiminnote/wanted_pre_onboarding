const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path')
const session = require('express-session');
const nunjucks = require('nunjucks');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');

dotenv.config();
const Router = require('./routes');
const authRouter = require('./routes/auth');
const jobPostingRouter = require('./routes/jobPostingRouter');
const { sequelize } = require('./models');
const app = express();
passportConfig(); 

app.set('port',process.env.PORT||8000);
app.set('views engine', 'html');
nunjucks.configure('views',{
    express:app,
    watch: true,
});

sequelize.sync({ force: false })
   .then(() => {
      console.log('데이터베이스 연결됨.');
   }).catch((err) => {
      console.error(err);
   });

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
    },
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', Router);
app.use('/jobPosting', jobPostingRouter);
app.use('/auth', authRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
});
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});