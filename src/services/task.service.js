const TaskModel=require('../model/task.model')
class TaskService {
    
    async createTask(taskData) {
       try{
        let { userId,title, description, dueDate, priority, status } = taskData;
        const newTask = new TaskModel({
            userId,
            title,
            description,
            dueDate,
            priority,
            status
        });

        return await newTask.save();  
       }catch(err){
        console.error('Error creating task:', err);
       }
         
    }
    
    async getTaskById(id) {
        try{
            return await TaskModel.findOne({ _id: id });
        }catch(err){
            console.error('Error fetching task by ID:', err);
        }
        
    }

    async getTasks() {
        try{
            return await TaskModel.find({ });
        }catch(err){
            console.error('Error fetching task by ID:', err);
        }
        
    }
    
    async updateTask(id, updateData) {
        try{
            return await TaskModel.findByIdAndUpdate(id, updateData, { new: true });
        }catch(err){
            console.error('Error updating task:', err);
        }
        
    }
    async deleteTask(id) {
        try{
            return await TaskModel.findByIdAndDelete(id);
        }catch(err){
            console.error('Error deleting task:', err);
        }
        
    }

}
module.exports=new TaskService()