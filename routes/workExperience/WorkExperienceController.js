import express from "express";
import bodyParser from "body-parser";
import WorkExperience from "./WorkExperience.js";

const router = express.Router();

// router.use(bodyParser.urlencoded({
//   extended: true
// }))
router.use(bodyParser.json());

router.get("/", (req, res, next) => {
  WorkExperience.find({})
    .then((workEx) => {
      res.status(200).send(workEx);
    })
    .catch((err) => next(err));
});

router.get("/:id", (req, res, next) => {
  WorkExperience.findById(req.params.id)
    .then((workEx) => {
      res.status(200).send(workEx);
    })
    .catch((err) => next(err));
});

router.post(`/`, (req, res, next) => {
  const newWorkExperience = {
    title: req.body.title,
    employer: req.body.employer,
    period: req.body.period,
    summary: req.body.summary,
    excerpts: req.body.excerpts,
    keywords: req.body.keywords
  };
  WorkExperience.exists({title: newWorkExperience.title}).then((result) => {
    console.log(result)
    if(result){
      res.send('document already exists')
    } else{
      WorkExperience.create(newWorkExperience)
    .then((workXp) => res.status(200).send(workXp))
    .catch((err) => next(err));
    }
  }).catch(err => next(err))
 
});

router.put(`/:id`, (req, res, next) => {
  const quoteUpdate = {
    author: req.body.author,
    categories: req.body.categories,
    quote: req.body.quote,
    notes: req.body.notes,
  };
  WorkExperience.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((quote) => res.status(200).send(quote))
    .catch((err) => next(err));
});

router.delete("/:id", (req, res, next) => {
  WorkExperience.findByIdAndRemove(req.params.id)
    .then((quote) => res.status(200).send(`WorkExperience id ${quote._id} was deleted`))
    .catch((err) => next(err));
});

export default router;
