const jwt = require("jsonwebtoken");
const passport = require("passort");
const LocalStrategy = require("passport-local");

const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");

const userRoutes = require("../users/userRoutes");
const authRoutes = require("../auth/authRoutes");

module.exports = function(server) {
  // sanity check route
  server.get("/", function(req, res) {
    res.send({ api: "up and running" });
  });

  server.use("/api/users", userRoutes);
  server.use("/api/auth", authRoutes);
};
