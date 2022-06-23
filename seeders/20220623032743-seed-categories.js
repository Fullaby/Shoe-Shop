'use strict';
const fs= require('fs');
module.exports = {
   up (queryInterface, Sequelize) {
   
    let data= JSON.parse(fs.readFileSync('./data/categories.json','utf-8'))
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   data.forEach(el=>{
    el.createdAt= new Date()
    el.updatedAt= new Date()
   })
   return queryInterface.bulkInsert('Categories',data,{})

  },

   down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Categories',null)
  }
};
