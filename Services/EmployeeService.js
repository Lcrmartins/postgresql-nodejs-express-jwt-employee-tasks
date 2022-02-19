const EmployeeRepository = require('../Repositories/EmployeeRepository');

const index = async () => {
  return await EmployeeRepository.findAll();
}

const show = async (id) => {
  return await EmployeeRepository.findEmployeeById(id);
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
  index, show, store, existsId, destroy 
};