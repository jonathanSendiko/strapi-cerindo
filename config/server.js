module.exports = ({ env }) => ({
  host: env("HOST"),
  port: env.int("PORT"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "6e8c5ec4b6f63fde777c1291f09d035c"),
    },
    url : "https://www.cerindocorp.com/dashboard"
  },
});