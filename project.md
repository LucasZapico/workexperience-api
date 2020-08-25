# Projects API

## Objective

The objective of this project is to create an API to enable the creation documentation of projects, work, post etc

## Question

I break down projecting into the STAR structure, that is

STAR

- situation
- task
- action
- result

or

S-CMAR

- summary
- challenge
- method
- action
- result

Do I want to have api endpoints for each of these copy or do I want to have a single markdown doc and parse it for these headers?

How should I handle related projects articles etc?

## Schema

### project schema

| name        | description                                             | type   |
| :---------- | :------------------------------------------------------ | :----- |
| title       | title of project                                        | string |
| excerpt     | excerpt describing the project                          | string |
| summary     | copy: summary of project                                | string |
| challenge   | copy: the challenge                                     | string |
| action      | copy: the acton                                         | string |
| method      | copy: method or strategy applied to solve the challenge | string |
| result      | copy: the result of the method applied                  | string |
| summary_img |                                                         | image  |

### Technical Skill Schema

| name | level | categories | tags | |

### Work Experience Schema

| name     | description                                                       | type                  |
| :------- | :---------------------------------------------------------------- | :-------------------- |
| title    | position title                                                    | string                |
| employer | employer title                                                    | string                |
| period   | start and end date                                                | object date           |
| summary  | summary of position responsibilities                              | string < 250          |
| excerpts | bulleted point of particular responsibilities actions and results | array of string < 150 |
|  |
|keywords | sets of keywords associated with the position | object | 

## Todo

- [ ] handle image processing for responsive and 1x 2x etc
- [ ] permissions -- [set up users with Google auth api](https://medium.com/@jackrobertscott/how-to-use-google-auth-api-with-node-js-888304f7e3a0)
