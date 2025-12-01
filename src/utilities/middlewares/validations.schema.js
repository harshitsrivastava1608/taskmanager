const Joi = require('joi');

exports.AuthSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
})

exports.TaskSchema = Joi.object({
    // userId: Joi.number().required(),
    title: Joi.string().min(3).required(),
    description: Joi.string().optional(),
    priority: Joi.string().valid('Low', 'Medium', 'High').required(),
    status: Joi.string().valid('Pending', 'In Progress', 'Completed').required(),
    dueDate: Joi.date().iso().required(),
});
