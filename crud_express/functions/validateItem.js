const Joi=require('joi');

function validateItem(item) {
  
    const schema=Joi.object({
        title:Joi.string().min(3).required()
    });
    return schema.validate(item);
}

module.exports= validateItem;
