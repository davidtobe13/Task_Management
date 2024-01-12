// const joi = require('joi');

// const validation  =  joi.object({
//     fullName: joi.string()
//             .min(3)
//             .required(),

    
//     email: joi.string()
//             .email(),

//     address: joi.string()
//             .min(3)
//             .required(),

//     state: joi.string()
//             .min(3)
//             .required(),

//     country: joi.string()
//             .required(),

//     DOB: joi.string()
//             .required(),

//     password: joi.string()
//             .pattern(new RegExp ('^[a-zA-Z0-9]{8,}$')),

//     phoneNumber: joi.string()
//             .pattern(new RegExp ('^[0-9]'))
//             .min(11)
//             .max(11),
// })


const hapiJoiValidator = require("@hapi/joi");

const validation = (data) => {

  try {
  
        const validateStudent = hapiJoiValidator.object({
        firstName: hapiJoiValidator.string().min(3).max(40).trim().pattern(/^[a-zA-Z]+$/).required().messages({
          'string.empty': 'firstName cannot be empty',
          'string.min': 'Min 3 characteers',
        }),
        lastName: hapiJoiValidator.string().min(3).max(40).trim().pattern(/^[a-zA-Z]+$/).required().messages({
          'string.empty': 'lastName cannot be empty',
          'string.min': 'Min 3 characteers',
        }),
        phoneNumber: hapiJoiValidator.string().min(11).trim().regex(/^\+\d{11,}$/).required().message({
          'string.empty': 'phone number cannot be empty',
        }),

        email: hapiJoiValidator.string().email({ tlds: { allow: false } }).trim().min(5).required(),
        password: hapiJoiValidator.string().min(8).max(30).required(),
        confirmPassword: hapiJoiValidator.string().min(8).max(30).required()
      })

    return validateStudent.validation(data);

  } catch (err) {
    console.log(err.message);
  }
};

module.exports = validation



// const hapiJoiValidator = require("@hapi/joi");

// const validation = (data) => {
//   try {
//     const validateUser = hapiJoiValidator.object({
//       firstName: hapiJoiValidator.string().min(3).max(40).trim().pattern(/^[a-zA-Z]+$/).required().messages({
//         'string.empty': 'First name cannot be empty',
//         'string.min': 'Minimum 3 characters required for first name',
//         'string.pattern.base': 'First name should only contain letters'
//       }),
//       lastName: hapiJoiValidator.string().min(3).max(40).trim().pattern(/^[a-zA-Z]+$/).required().messages({
//         'string.empty': 'Last name cannot be empty',
//         'string.min': 'Minimum 3 characters required for last name',
//         'string.pattern.base': 'Last name should only contain letters'
//       }),
//       phoneNumber: hapiJoiValidator.string().min(11).trim().regex(/^\+\d{11,}$/).required().message({
//         'string.empty': 'Phone number cannot be empty',
//         'string.pattern.base': 'Invalid phone number format'
//       }),
//       email: hapiJoiValidator.string().email({ tlds: { allow: false } }).trim().min(5).required().messages({
//         'string.empty': 'Email cannot be empty',
//         'string.email': 'Invalid email format'
//       }),
//       password: hapiJoiValidator.string().min(8).max(30).required().messages({
//         'string.empty': 'Password cannot be empty',
//         'string.min': 'Minimum 8 characters required for password'
//       }),
//       confirmPassword: hapiJoiValidator.string().min(8).max(30).required().valid(hapiJoiValidator.ref('password')).messages({
//         'string.empty': 'Confirm password cannot be empty',
//         'any.only': 'Passwords do not match'
//       })
//     });

//     return validateUser.validate(data);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// module.exports = validation;
