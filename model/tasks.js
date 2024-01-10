
const mongoose = require('mongoose');

const tasksSchema = new mongoose.Schema({
    
      tasks:{
           type:String,
           require:true
      },
      description:{
           type:String,
           require:true
      },
      user:{
        //linking to the user
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
     },
})

const Tasks = mongoose.model('Tasks',tasksSchema);
module.exports = Tasks;