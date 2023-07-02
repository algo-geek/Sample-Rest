const tourController = require('../controllers/tour.controller');

const tourRouter = require('express').Router();


tourRouter.get("/", tourController.getTours);

tourRouter.post("/", tourController.createTour);

tourRouter.get("/:id", tourController.getTourById);

tourRouter.patch("/:id", tourController.patchTourById)

tourRouter.delete("/:id", tourController.deleteTourById);

module.exports = tourRouter;