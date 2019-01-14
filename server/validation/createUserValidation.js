const Joi = require("joi");

const validateCreateUser = (user) => {
    const schema = {
        email: Joi.string().min(5).max(255).required().email().error(() => "Email is required and must be valid"),
        password: Joi.string().min(5).max(255).required().error(() => "Password is required and must be at least 5 characters"),
        firstname: Joi.string().min(2).max(255).required().error(() => "First Name is required"),
        lastname: Joi.string().min(2).max(255).required().error(() => "Last Name is required")
    };
    return Joi.validate(user, schema, {abortEarly: false});
}

module.exports = validateCreateUser;