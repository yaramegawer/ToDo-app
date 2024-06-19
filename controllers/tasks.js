const ToDo=require('../models/todoModel');



// Route to create a new task
const createTask = async (req, res) => {
    try {
        let task = new ToDo({
            task: req.body.task,
            completed: req.body.completed || false
        });
        await task.save();
        console.log("task added successfully");
       
    } catch (err) {
        console.log(err, "Error adding this task");
        res.status(500).send("Error adding the task");
    }
};

const updateTask=async(req,res)=>{
    try{ 
        
        const updated=await ToDo.updateOne({_id:req.params.id},{
            completed:true
        });

        if(!updated) {
            console.log("Task not found");
            return res.status(404).send("Task not found");
        }
        console.log("task updated successfully");
        res.status(200).send("Task updated successfully");

       
    }catch(err){
        console.log(err,"Error updating this task");
        res.status(500).send("Error updating the task");
    }
};
const deleteTask = async (req, res) => {
    try {
       
        const { id } = req.params; // Access _id from req.params

        // Use the id directly without the curly braces
        const result = await ToDo.findByIdAndDelete(id);


        if (!result) {
            console.log("Task not found");
            return res.status(404).send("Task not found");
        }

        console.log("Task deleted successfully");
        return res.status(200).send("Task was deleted successfully");
   

        
        
    } catch (err) {
        console.error("Error deleting this task:", err);
        return res.status(500).send("Error deleting the task");
    }
};
module.exports={createTask,deleteTask,updateTask};