const EmployeeRepository = require('../Repositories/EmployeeRepository');

const index = async () => {
  return await EmployeeRepository.findAll();
}

const store = ({ name, position }) => {
  
  EmployeeRepository.insert({ name, position });
}

const existsId = async (id) => {
  const value = await EmployeeRepository.findId(id);
  return value ? true : false;
}

const destroy = async (id) => {
  return await EmployeeRepository.remove(id);
}

module.exports = {
  index, store, existsId, destroy 
};