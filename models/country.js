const Sequelize = require('sequelize');

module.exports = class Country extends Sequelize.Model {
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
            modelName: 'Country',
            tableName: 'countries',
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.Country.hasMany(db.Region);
    }
};