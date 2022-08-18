const Sequelize = require('sequelize');

module.exports = class Region extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            name: {
                type: Sequelize.STRING(200),
                allowNull: false,
                unique: true,
            },
        },{
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Region',
            tableName: 'regions',
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.Region.belongsTo(db.Country);
        db.Region.hasMany(db.Company);
    }
}