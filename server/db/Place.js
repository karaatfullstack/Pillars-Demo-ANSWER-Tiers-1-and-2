const Sequelize = require("sequelize");
const db = require("./db");

const Place = db.define("place", {
  place_name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  category: {
    type: Sequelize.ENUM("CITY", "STATE", "COUNTRY"),
    defaultValue: "STATE",
    allowNull: false,
  },
});

Place.findCitiesWithNoParent = function () {
  return this.findAll({
    where: {
      category: "CITY",
      parentId: null,
    },
  });
};

Place.findStatesWithCities = function () {
  return this.findAll({
    where: {
      category: "STATE",
    },
    include: [{ model: Place, as: "children" }],
  });
};

Place.belongsTo(Place, { as: "parent" });
Place.hasMany(Place, { as: "children", foreignKey: "parentId" });

module.exports = Place;
