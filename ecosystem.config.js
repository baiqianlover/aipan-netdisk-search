module.exports = {
  apps: [
    {
      name: "aipan-netdisk-search",
      port: "3000",
      exec_mode: "cluster",
      instances: "max",
      script: "./.output/server/index.mjs",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
        ADMIN_USER: process.env.ADMIN_USER,
        ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        ADMIN_EMAIL: process.env.ADMIN_EMAIL,
        JWT_SECRET: process.env.JWT_SECRET,
        DATABASE_SCHEMA: process.env.DATABASE_SCHEMA,
        DATABASE_URL: process.env.DATABASE_URL,
        SHADOW_DATABASE_URL: process.env.SHADOW_DATABASE_URL,
      },
    },
  ],
};
