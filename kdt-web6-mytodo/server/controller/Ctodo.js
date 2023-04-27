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
        title: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        done: {
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