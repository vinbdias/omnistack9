const Booking = require('../models/Booking');

module.exports = {
    store: async (req, res) => {
        const { user_id } = req.headers;        
        const { spot_id } = req.params;
        const { date } = req.body;

        try {
            const booking = await Booking.create({
                user: user_id,
                spot: spot_id,
                date
            });

            await booking.populate('spot').populate('user').execPopulate();
            
            return res.json(booking);            
        } catch (error) {
            return res.status(500).json(error);
        }

    }
};