module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c5d29f952bb463b359b9373781ef8f31'),
  },
});
