const EmployeeRepository = require('../Repositories/EmployeeRepository');

const index = async () => {
  return await EmployeeRepository.findAll();
}

const store = ({ name, position }) => {
  
  EmployeeRepository.insert({ name, position });
}

module.exports = {
  index, store 
};