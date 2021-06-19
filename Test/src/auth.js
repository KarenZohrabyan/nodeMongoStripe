const passport = require('passport');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
const User = require('./models/user');

passport.serializeUser(function (user, done) {
  console.log('serializeUser');
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  console.log('deserializeUser');
  const user = await User.findOne({id: id});  
  done(null, user)
});


passport.use(new VKontakteStrategy(
  {
    clientID: '7771460', // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
    clientSecret: 'Dr9YMU3ODCTn9UfnOhne',
    callbackURL: "http://localhost:3000/vkontakte/callback",
  },
  async function myVerifyCallbackFn(req, accessToken, refreshToken, params, profile, done) {
    const findU = await User.findOne({ userId: params.user_id });
    console.log('Finding a user or create an account.');
    console.log(params);
    // console.log(profile);
    if (!findU) {
      const user = new User({
        accessToken: accessToken,
        expires_in: params.expires_in,
        userId: params.user_id,
        email: params.email,
        userName: profile.username,
        displayName: profile.displayName
      })
      await user.save()
      done(null, user);
    } else {
      findU.accessToken = accessToken
      await findU.save()
      done(null, findU);
    }
  }
));

