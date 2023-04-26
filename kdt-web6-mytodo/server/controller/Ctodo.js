const todo = function (Sequelize, DataTypes) {

}
    {
    return Sequelize.define(
      'todo', 
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        userid: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        name: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        pw: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      }, 
      {
        tableName: '',
        freezeTableName: true,
        timestamps: false,
      }
    );
  };
  
  module.exports = ;