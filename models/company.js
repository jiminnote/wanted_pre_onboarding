const Sequelize = require('sequelize');

module.exports = class Company extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Company',
            tableName: 'companies',
            paranoid: true,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.Company.belongsTo(db.User);
        db.Company.belongsTo(db.Region);
        db.Company.hasMany(db.JobPosting);
    }
};

