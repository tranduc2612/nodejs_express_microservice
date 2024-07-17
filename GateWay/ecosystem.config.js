module.exports = {
    apps: [
      {
        name: 'service1',
        script: 'nodemon ../UserService/server.js',
        // instances: 1,
        autorestart: true,
        watch: true, // Bật watch mode
      },
      {
        name: 'service2',
        script: '../ProductService/server.js',
        // instances: 1,
        autorestart: true,
        watch: true, // Bật watch mode
      },
      {
        name: 'gateway',
        script: './index.js',
      }
    ]
  };
  