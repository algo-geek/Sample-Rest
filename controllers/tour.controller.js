const tourModel = require("../models/tour.model");

let tours = [];

exports.getTours = async (req, res) => {
    try {
        const tours = await tourModel.find({});
        return res.status(200).json({
            data: tours
        })
    } catch (error) {
        return res.status(500).json({
            'message': 'Something went wrong'
        })
    }
    
}

exports.createTour = async (req, res) => {
    try {
        const reqBody = req.body;
    // const createdTour = {...reqBody, id: tours.length};
    // tours.push(createdTour);
        const result = await tourModel.create(reqBody);
        return res.status(201).json({
            data: result
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.getTourById = async (req, res) => {
    try {
        const tourId = req.params.id;
        const tour = await tourModel.findById(tourId);

        if(!tour){
            return res.status(404).json({
                message: `Tour with this id not found: ${tourId}`
            });
        }

        return res.status(200).json({
            data : tour
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

exports.patchTourById = async (req, res) =>{
    try {
        const tourId = req.params.id;
        const reqBody = req.body;
        const result = await tourModel.findByIdAndUpdate(tourId, reqBody, {
            new: true,
            runValidators: true
        });

        return res.status(200).json({
            data: result
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

    // const tourId = parseInt(req.params.id);
    // const reqBody = req.body;
    // tours = tours.map((tour) =>{
    //     if (tour.id === tourId){
    //         tour.price = reqBody.price;
    //         return tour;
    //     }
    //     return tour;
    // });
    // return res.status(200).json({
    //     data: tours[tourId]
    // })
}

// exports.deleteTourById = (req, res) =>{
//     const tourId = parseInt(req.params.id);
//     tours = tours.filter((tour) => tour.id !== tourId);
//     return res.status(204).end();
// }

exports.deleteTourById = async (req, res) =>{
    try {
        const tourId = req.params.id;
        tours = tours.filter((tour) => tour.id !== tourId);
        return res.status(204).end();

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}