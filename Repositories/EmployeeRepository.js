const Database = require('../Config/Database');


const insert = ({ name, position }) => {
  // console.log('EmployeeRepository: ', name, position);

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

module.exports = {
  insert
};