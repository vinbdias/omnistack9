const User = require('../models/User');

module.exports = {
    store: async (req, res) => { 
        try {
            const { email } = req.body;        

            let user = await User.findOne({ email });

            if(!user)
                user = await User.create({ email });            
    
            return res.json(user);                                    
        } catch (error) {
            return res.status(500).json(error);            
        }       
    }
};