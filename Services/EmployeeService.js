const EmployeeRepository = require('../Repositories/EmployeeRepository');

const store = ({ name, position }) => {
  
  EmployeeRepository.insert({ name, position });
}

module.exports = {
  store
};