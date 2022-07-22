const mongoose=require("mongoose");
mongoose.connect('mongodb+srv://Shibin:123lavender@cluster0.cuad3.mongodb.net/FriendsDB?retryWrites=true&w=majority')
const Schema=mongoose.Schema;
const FriendsSchema=new Schema({
   name:String,
   friendName:String,
   friendNickName:String,
   DescribeYourFriend:String
}
);
var FriendData=mongoose.model("friendset",FriendsSchema);
module.exports=FriendData;