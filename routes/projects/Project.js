import {Schema, model} from 'mongoose'
import Joi from 'joi'

const ProjectSchema = new Schema({
  title       : String,
  tags        : Object,
  categories  : Object,
  technologies: Object,
  projectCopy : [ProjectCopy]
})

const ProjectCopy = new Schema({
  excerpt: String, 
  summary: String, 
  challenge: String, 
  action: String, 
  method: String, 
  result: String,
})