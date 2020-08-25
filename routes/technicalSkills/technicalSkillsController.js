import express from "express";
import bodyParser from "body-parser";
import TechSkill from "./techSkill.js";

const router = express.Router();

// router.use(bodyParser.urlencoded({
//   extended: true
// }))
router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  TechSkill.find({})
    .then((techSkill) => {
      res.status(200).send(techSkill);
    })
    .catch((err) => next(err));
  
});

router.get("/:id", (req, res, next) => {
  TechSkill.findById(req.params.id)
    .then((techskill) => {
      res.status(200).send(techskill);
    })
    .catch((err) => next(err));
});

router.post(`/`, (req, res, next) => {
  // check if document already exists
  
  const newTechSkill = {
    title: req.body.title,
    level: req.body.level
  };
  TechSkill.exists({title: newTechSkill.title}).then((result) => {
    console.log(result)
    if(result){
      res.send('document already exists')
    } else{
      TechSkill.create(newTechSkill)
    .then((techSkill) => res.status(200).send(techSkill))
    .catch((err) => next(err));  
    }
  }).catch(err => next(err))
});

router.put(`/:id`, (req, res, next) => {
  const newTechSkill = {
    title: req.body.title,
    
  };
  TechSkill.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((techskill) => res.status(200).send(techskill))
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  TechSkill.findByIdAndRemove(req.params.id)
    .then((techskill) => res.status(200).send(`TechSkills id ${techskill._id} was deleted`))
    .catch((err) => next(err));
});

export default router;
