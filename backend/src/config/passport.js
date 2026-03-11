const passport = require("passport")
const GoogleStrategy = require("passport-google-oauth20").Strategy
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

passport.use(
new GoogleStrategy(
{
clientID: process.env.GOOGLE_CLIENT_ID,
clientSecret: process.env.GOOGLE_CLIENT_SECRET,
callbackURL: "/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {

try {

let user = await User.findOne({ googleId: profile.id })

if (!user) {

user = await User.create({
name: profile.displayName,
email: profile.emails[0].value,
googleId: profile.id,
profileImage: profile.photos[0].value
})

}

const token = jwt.sign(
{ id: user._id, role: user.role },
process.env.JWT_SECRET,
{ expiresIn: "7d" }
)

return done(null, { user, token })

} catch (error) {

return done(error, null)

}

}
))

module.exports = passport