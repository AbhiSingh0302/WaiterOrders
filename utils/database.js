const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
    'root',
    'password',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const orders = sequelize.define("orders", {
    price: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
    },
    dish: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    table: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false
    }
 },{
    timestamps: false
 });

module.exports = orders;