const Sequelize = require('sequelize');

module.exports = class Position extends Sequelize.Model {
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
            modelName: 'Position',
            tableName: 'positions',
            paranoid: true,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.Position.hasMany(db.JobPosting);
    }
};