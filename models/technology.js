const Sequelize = require('sequelize');

module.exports = class Technology extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(50),
                allowNull: false,
                unique: true,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Technology',
            tableName: 'technologies',
            paranoid: true,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.Technology.hasMany(db.JobPosting);
    }
};