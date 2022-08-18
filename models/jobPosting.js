const Sequelize = require('sequelize');

module.exports = class JobPosting extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            compensation: {
                type: Sequelize.INTEGER(20),
                allowNull: true,
                unique: false,
            },
            content: {
                type: Sequelize.TEXT,
                allowNull: false,
                unique: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'JobPosting',
            tableName: 'JobPostings',
            paranoid: false,
            charset: 'utf8',
            collate:'utf8_general_ci',
        });
    }

    static associate(db){
        db.JobPosting.belongsTo(db.Company);
        db.JobPosting.belongsTo(db.Position);
        db.JobPosting.belongsTo(db.Technology);
        db.JobPosting.belongsToMany(db.User, {
            through: 'appliedHistory',
          });
    }
};



