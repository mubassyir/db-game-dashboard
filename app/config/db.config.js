//information data credential

module.exports = {
    HOST: "localhost",
    USER: "mubassyir",
    PASSWORD: "123",
    DB: "gamedb", 
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  };
  