import {Schema, model} from 'mongoose'
import Joi, { object } from 'joi'

const WorkExperienceSchema = new Schema({
  title   : String,                              // position title
  employer: String,                              // name of employer  
  period  : Object,                              // object containing start and end dates
  summary : String,                              // summary of work experience < 250 words
  excerpts: Object,                              // array of string excerpts < 5
  keywords : Object,                              // array of keywords ?? 
  created : { type: Date, default: Date.now },
})

// employer link? LinkedIn, website


WorkExperienceSchema.methods.joiValidate = (obj) => {
  const schema = {
    title   : Joi.types.String().min(6),
    employer: Joi.types.String().required(),
    period  : Joi.types.Object(),
    summary : Joi.types.String(),
    excerpts: Joi.types.Object(),
    keywords : Joi.types.Object(),
    created : Joi.types.Date(),
  };
  return Joi.validate(obj, schema);
};

model('WorkExperience', WorkExperienceSchema)
export default model('WorkExperience')