import dotenv from 'dotenv'
import express from 'express'
import db from './db.js'
import cors from 'cors'
import WorkExperienceController from './routes/workExperience/WorkExperienceController'
import TechSkillsController from './routes/technicalSkills/technicalSkillsController'

dotenv.config()
const opt = {debug: true}

const PORT = process.env.PORT || 3000
const app = express()

if(db){
  // console.log(db)
}

app.listen(PORT, () => {console.log(`listening on ${PORT}`)})
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello Projects API')
})
app.get('/db', (req, res) => {
  
  res.send('Hello db')
})
app.use('/api/work-experience', WorkExperienceController)
app.use('/api/tech-skills', TechSkillsController )

