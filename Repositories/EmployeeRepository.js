const Database = require('../Config/Database');

const findAll = async () => {
  const response = await Database.query(`
    select * from employees order by id
  `);
  return response.rows;
}

const findEmployeeById = async (id) => {
  const response = await Database.query(`
    select * from employees where id=$1
  `, [
    id
  ]);
  return response.rows[0];
}

const insert = ({ name, position }) => {
  Database.query(`
    insert into employees (
      name, position, created_at, updated_at
    ) values(
      $1, $2, current_timestamp, current_timestamp
    )`,
    [
    name, position,
  ]);
}

const findId = async (id) => {
  const response = await Database.query(`
    select id from employees where id = $1
  `, [
    id
  ]);
  return response.rows[0];
}

const remove = async (id) => {
  const response = await Database.query(`
    delete from employees where id=$1 returning id
  `, [
    id
  ]);
  return response.rows[0].id;
}

module.exports = {
  findAll, findEmployeeById, insert, findId, remove
};