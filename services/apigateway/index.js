const cors = require('cors');
const axios = require('axios').default;
const app = require('./servicediscovery/service');
const port =  3000;
const refdata = require('./controllers/refdatacontroller');
const trade = require('./controllers/tradeservicecontroller');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const cookieSession = require('cookie-session');

app.use(cors());

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000, // One day in milliseconds
    keys: ['randomstringhere']
}));

app.use(passport.initialize()); // Used to initialize passport
app.use(passport.session()); // Used to persist login sessions

// Strategy config
passport.use(new GoogleStrategy({
    clientID: '7334359760-n7sqk50vr7caplou0idntkh8posi7iul.apps.googleusercontent.com',
    clientSecret: '3U50KbYQiMYo7viaI0SlY9qf',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    
},
(accessToken, refreshToken, profile, done) => {
    done(null, profile); // passes the profile data to serializeUser
}
));

// Used to stuff a piece of information into a cookie
passport.serializeUser((user, done) => {
    done(null, user);
});

// Used to decode the received cookie and persist session
passport.deserializeUser((user, done) => {
    done(null, user);
});


// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
    if (req.user) {
        next();
    } else {
        res.send('You must login!');
    }
}

// passport.authenticate middleware is used here to authenticate the request
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile'], // Used to specify the required data
    prompt: 'select_account consent'
}));

// The middleware receives the data from Google and runs the function on Strategy config
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
    res.redirect('/secret');
});

// Secret route
app.get('/secret', isUserAuthenticated, (req, res) => {
    res.send('You have reached the secret route');
});

// Logout route
app.get('/logout', (req, res) => {
    req.logOut();
    req.session = null;
    res.send('Logged out successfully');
;});


// Authentication
app.use((req, res, next) => {
  // TODO: my authentication logic
  next()
})

app.use('/refdata',refdata);
app.use('/tradeservice',trade);

app.listen(port, () => {
    console.log(`API Gateway Service Running in ${port}`);
});





