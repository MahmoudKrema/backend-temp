import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import passport from 'passport';

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "mysecretkey",
//   algorithms: ['BASE64'],

//   issuer: 'accounts.examplesoft.com',
//   audience: 'yoursite.net'
};


passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {

    console.log(jwt_payload);
    try {
        
    // const user = await User.findOne({ id: jwt_payload.sub });
    const user = {
        name: "krema",
    };

    if (user) {
        
        return done(null, user);
    } else {
        return done(null, false);
        // or you could create a new account
    }
    } catch (err) {
    return done(err, false);
    }
}));


export default passport;
