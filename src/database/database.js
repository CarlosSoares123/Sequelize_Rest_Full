import Sequelize from "sequelize";

export const sequelize = new Sequelize('projectdb0', 'postgres', 'carlossoares', {
  host: 'localhost',
  dialect: 'postgres'
})