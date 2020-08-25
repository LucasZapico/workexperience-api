import { Schema, model } from "mongoose";
import Joi, { object } from "joi";

const TechSkillSchema = new Schema({
  title: String, // position title
  level: Number, // skill level 1-10 1 being beginner and 10 being master
  created: { type: Date, default: Date.now },
});

// employer link? LinkedIn, website

TechSkillSchema.methods.joiValidate = (obj) => {
  const schema = {
    title: Joi.types.String().min(6),
    level: Joi.number().min(1).max(10).required(),
    created: Joi.types.Date(),
  };
  return Joi.validate(obj, schema);
};

model('TechSkill', TechSkillSchema)
export default model('TechSkill')