let User=require('../models/model_user');
let connection=require('../connection');

module.exports.create=function(req, res) {

    User.create({
        userName:req.body.userName,
        userId:req.body.userId,
        pic:req.body.pic
    })
        .then((savedUser) => {
            return res.json(savedUser);
        });

};

module.exports.find=function(req, res) {

    User.find({})
        .exec()
        .then((user) => {
            if (!user) {
                return res.status(404).json({
                    status: 400,
                    message: "User not found"
                });
            }
            else
                res.json(user);
        });
};