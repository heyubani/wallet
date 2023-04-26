'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      middle_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      verification_token: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      verification_token_expires: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      pin: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      date_of_birth: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      gender: {
        type: Sequelize.ENUM('male', 'female'),
        defaultValue: null,
        allowNull: true,
      },
      bvn: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      image_url: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM(
          'active',
          'inactive',
          'locked',
          'suspended',
          'deactivated',
        ),
        defaultValue: 'inactive',
        allowNull: false,
      },
      is_deleted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      is_verified_phone_number: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      is_verified_email: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      is_verified_bvn: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      is_created_password: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      is_completed_kyc: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      is_created_pin: {
        type: Sequelize.BOOLEAN,
        defaultValue: null,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  },
};
