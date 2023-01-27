const models = require('../database/models');
const CustomError = require('../utils/customError');

const loginService = {
  /**
   * @param {{email: string, password: string}} requestUser
   */
  login: async (requestUser) => {
    const user = await models.User.findOne({
      where: {
        email: requestUser.email,
        password: requestUser.password,
      },
      attributes: {
        exclude: ['password', 'image'],
      },
      raw: true,
    });

    if (!user) throw new CustomError('InvalidFieldsError', 'Invalid fields');

    return user;
  },
};

module.exports = loginService;
