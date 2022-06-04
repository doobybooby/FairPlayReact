const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.DATABASE_URL || 'postgres://postgres:admin@localhost/fair_play_react_router_db');

const Room = conn.define('room', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  courtNumber : {
    default: 0,
    type: Sequelize.INTEGER,
  },
  numberOfPlayers: {
    default: 0,
    type: Sequelize.INTEGER,
  }
})


const syncAndSeed = async () => {
  await conn.sync({ force: true });
  const [pier6, centralPark] = await Promise.all([
    Room.create({ name: 'pier6' }),
    Room.create({ name: 'centralPark', courtNumber: 1, numberOfPlayers: 2 }),
  ])
}

module.exports = {
  syncAndSeed,
  models: {
    Room
  }
}