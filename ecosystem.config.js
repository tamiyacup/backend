module.exports = {
    apps : [
        {
          name: "API",
          script: "./dist/src/main.js",
          env: {
            "NODE_ENV": "production",
          }
        }
    ]
  }