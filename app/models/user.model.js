module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      user_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false
      },
      password: {
        type: Sequelize.INTEGER,
        allowNull:false
      }
    });
    return User;
  };
  