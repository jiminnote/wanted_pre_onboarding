const Sequelize = require('sequelize');

module.exports = class User extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: false,
            },
            identity: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true,
            },
            password: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: false,
            },
            isBusinessAccount: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'User',
            tableName: 'users',
            paranoid: true,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.User.hasMany(db.Company);
        db.User.belongsToMany(db.JobPosting, {
            through: 'AppliedHistory',
          });
    }
};

