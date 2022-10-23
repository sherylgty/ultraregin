// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   url: env("PUBLIC_URL"),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });



module.exports = ({ env }) => ({
  proxy: true,
  url: env('APP_URL'), // replaces `host` and `port` properties in the development environment
  app: { 
    keys: env.array('APP_KEYS')
  },
});