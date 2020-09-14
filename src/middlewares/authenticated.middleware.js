// 'use strict';
// const { debug, apiCode, IS_ACTIVE, ROLE, SALE_STATUS } = require('../utils/constant');
// var compose = require('composable-middleware');
// const response = require('../common/response');
// const Sequelize = require('sequelize');
// const sequelize = require('../config/env');
// const { user, user_sale_media, user_sale_info, province } = require('@models');
// const Op = Sequelize.Op;
// // const userController = require('../controllers/userController')

// module.exports = {
//   isGuest: function isGuest() {
//     return compose().use(function (req, res, next) {
//       next();
//       return;
//     });
//   },
//   isAuthenticated: function isAuthenticated() {
//     return compose().use(async function (req, res, next) {
//       if (req.headers && req.headers.token) {
//         try {
//           var findUser = await user.findOne({
//             include: {
//               model: user_sale_info,
//             },
//             attributes: ['id', 'full_name', 'token', 'role_id', 'email', 'device_id'],
//             where: {
//               [Op.or]: [
//                 {
//                   role_id: ROLE.SALE,
//                   user_sale_status_id: Sequelize.where(
//                     user_sale_info.sequelize.col('user_sale_info.user_sale_status_id'),
//                     SALE_STATUS.HR_MANAGER_APPROVE
//                   ),
//                 },
//                 {
//                   role_id: { [Op.ne]: 5 },
//                 },
//               ],
//               token: req.headers.token,
//               is_active: IS_ACTIVE.ACTIVE,
//             },
//           });
//           if (findUser) {
//             req.auth = findUser;
//             next();
//             return;
//           } else return res.json(response.error(apiCode.UNAUTHORIZED));
//         } catch (error) {
//           debug.error(error);
//           return res.json(response.error(apiCode.DB_ERROR, 'Lỗi kết nối'));
//         }
//       } else {
//         return res.json(response.error(apiCode.INVALID_ACCESS_TOKEN));
//       }
//     });
//   },
// };
