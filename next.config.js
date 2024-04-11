module.exports = {
    async headers() {
      return [
        {
          // matching all API routes
          source: "/:path*",
          headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "https://web-push-demo-virid.vercel.app/" },
            { key: "Access-Control-Allow-Origin", value: "https://localhost:3000" },
            { key: "Access-Control-Allow-Origin", value: "https://local.disneyplus.com:3000" },
            { key: "Access-Control-Allow-Origin", value: "https://stage-web.disneyplus.com" },
            { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
            { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
          ]
        }
      ]
    }
  };
  