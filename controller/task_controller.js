 const { response } = require('express');
const Tasks = require('../model/tasks');


//tasklist

module.exports.taskList = function(req,res){
       
     try{

        Tasks.find({})
         .then((tasks)=>{
            
             return res.render('dashboard',{
                 title:'Dashboard',
                 tasklist: tasks
             });
           
         })
         .catch((err)=>{
             console.log('error in fetching contacts from db :' ,err);

             return res.status(500).send('Internal Server Error');
         })

     }catch(err){
      
         console.log('error in showing the tasklist on dashboards',err);
         return res.redirect('back');

     }
}
//create tasks
module.exports.createTask = async function (req,res){

    console.log(req.body);

      console.log("the task controlled are called");
    try{
        const newTask = await Tasks.create({
             tasks:req.body.task,
             description:req.body.description
        });
        console.log("created tasks:" ,newTask);
        return res.redirect('back');
    }catch(err){
         console.log("error in creating tasks",err);
         return res.redirect('back');
    }
}
//delete task
module.exports.deleteTask = function(req,res){
    
     

}
//view tasks
module.exports.viewTask = function(req,res){
     

}
//edit tasks
module.exports.updateTask = function(req,res){
     

}