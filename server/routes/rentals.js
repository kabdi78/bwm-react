const express = require('express');
const router = express.Router();
const Rental = require('../models/rental');

router.get('', function(req, res) {
    Rental.find({}, function(err, foundRentals) {
        return res.json(foundRentals);
    });    
});

router.get('/:id', function(req, res) {
    const rentalId = req.params.id;

    Rental.findById(rentalId, function(err, foundRental) {

        if (err || !foundRental) {
            return res.status(422).send({ errors: [{ title: 'Rental Error!', detail: 'Could not find Rental!' }] });
        }

        return res.json(foundRental);
    })    
});


module.exports = router;