//information data credential

module.exports = {
    HOST: "localhost",
    USER: process.env.USER ,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB , 
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  