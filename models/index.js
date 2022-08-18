const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];

const Company = require('./company');
const Country = require('./country');
const Region = require('./region');
const User = require('./user');
const JobPosting = require('./jobPosting');
const Position= require('./position');
const Technology= require('./technology');

const db = {};
const sequelize = new Sequelize(
  config.database, config.username, config.password, config
);

db.sequelize = sequelize;
db.User = User;
db.JobPosting = JobPosting;
db.Position = Position;
db.Technology = Technology;
db.Company = Company;
db.Country = Country;
db.Region = Region;

User.init(sequelize);
JobPosting.init(sequelize);
Position.init(sequelize);
Technology.init(sequelize);
Company.init(sequelize);
Country.init(sequelize);
Region.init(sequelize);

User.associate(db);
JobPosting.associate(db);
Position.associate(db);
Technology.associate(db);
Company.associate(db);
Country.associate(db);
Region.associate(db);

module.exports = db;
