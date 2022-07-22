const express=require("express");
const FriendData=require('./src/model/FriendData');
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.get('/getfriends',function(req,res){
    FriendData.find().then(function(friends){
        console.log(friends);
        res.send(friends);
        
    })
})




app.post('/addfriend',function(req,res){
    var item={
        name:req.body.name,
        friendName:req.body.friendName,
        friendNickName:req.body.friendNickName,
        DescribeYourFriend:req.body.DescribeYourFriend
    }
    var friend=FriendData(item);
    friend.save();

    FriendData.find()
    .then(function(friend){
        res.send(friend);
    })
})



app.put('/update/:id',function(req,res){
    const id=req.params.id;
    name=req.body.name;
    friendName=req.body.friendName;
    friendNickName=req.body.friendNickName;
    DescribeYourFriend=req.body.DescribeYourFriend;

        FriendData.findByIdAndUpdate({"_id":id},
        {$set:{"name":name,
        "friendName":friendName,
        "friendNickName":friendNickName,
        "DescribeYourFriend":DescribeYourFriend
}}).then(function(){res.send("Updated")});
})


app.delete('/delete/:id',function(req,res){
    const id=req.params.id;
    FriendData.findByIdAndDelete(id,function()
    {res.send("Deleted")})
})




app.listen(3000);
console.log("server running at port:3000");