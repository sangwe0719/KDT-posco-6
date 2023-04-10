const User = function (Sequelize, DataTypes) {
 
        const model = Sequelize.define(
        'User', 
        {
            id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
            userid:{
            type: DataTypes.STRING(20),
            allowNull: false,
            },
            name: {
            type: DataTypes.STRING(10),
            allowNull: false,
            },
            pw: {
                type: DataTypes.STRING(20),
                allowNull: false,
            }
        }, // param2: 컬럼 정의
        {
            tableName: 'user', // 실제 db table명
            freezeTableName: true, // 테이블명 고정!
            timestamps: false, // 데이터가 추가/수정되는 시간을 컬럼으로 만들어서 기록
        } // param3: 모델 옵션 정의
        );
  
        return model;
    };
  
  module.exports = User;