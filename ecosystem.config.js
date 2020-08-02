module.exports = {
    apps : [
        {
          name: "API_Tamiya",
          script: "./dist/src/main.js",
          env: {
            "NODE_ENV": "production",
          }
        }
    ]
  }