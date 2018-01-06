const mongoose=require('mongoose');


const Schema=mongoose.Schema;

const UserSchema=new Schema({
    id: String,
    userId: String,
    userName:String,
    pic : String

});


const User =mongoose.model('user_data',UserSchema);

module.exports=User;