import dotenv from "dotenv";
dotenv.config();

type Config = {
  db: DBConfigs;
  api: APIConfig;
};

type APIConfig = {
  port: string | undefined;
  filepathRoot: string;
};

type DBConfig = {
  url: string | undefined;
};

export const config: Config = {
  api: {
    port: process.env.PORT,
    filepathRoot: "./src/assets",
  },
  db: {
    url: process.env.DATABASE_URL,
  },
};
