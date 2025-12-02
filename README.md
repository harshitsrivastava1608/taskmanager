### Clone the repository to your system using the command:
  git clone https://github.com/harshitsrivastava1608/taskmanager

### Use the credentials as sent
  Create a file named .env at root of the folder and copy paste the credentials

### Run commands: 
npm install
npm run start
(Command to start the app is saved in scripts inside package.json)

### The Server with both databases is up and running.
Have used railway.com for deploying remote free tier databases and resend.com for free email service.

## API Documentation

POST API: http://localhost:3000/auth/register
Sample Body=> 
{
    "userName":"harshit",
    "email":"harshit.srivastava1608@gmail.com",
    "password":"abcd@1234"
}
This would register the user to app

POST API: http://localhost:3000/auth/login
Sample Body=> {
    "email":"harshit.srivastava1608@gmail.com",
    "password":"abcd@1234"
}
The response contains a signed JWT token containg userId.

POST API: http://localhost:3000/tasks
Pass the above obtained JWT token to headers with key Authorization
Sample Body=>{
    "title":"My First Task",
    "description":"description of my first task",
    "dueDate":"2025-12-04T14:30:00.000Z", "priority":"High", "status":"Pending"
}
This would save the task to database

GET API: http://localhost:3000/tasks
Query Params can be passed as : ?status=Pending
status,priority, (Pagination) =>pageSize and pageNumber these can also be passed.
We get the filtered tasks created by this specific user.

<img width="1100" height="500" alt="image" src="https://github.com/user-attachments/assets/f995a274-3ba0-4d11-8da5-8c6d4360abba" />

DELETE API: http://localhost:3000/tasks/:taskId
we can pass the taskId from above API of the task we want to delete

UPDATE API: DELETE API: http://localhost:3000/tasks/:taskId
Sample Body :{title,description,dueDate}
These data can be updated for a particular task.


<img width="1714" height="705" alt="image" src="https://github.com/user-attachments/assets/8e7d5430-df78-4633-9b5f-d259d4a0ab11" />

<img width="1647" height="751" alt="image" src="https://github.com/user-attachments/assets/e34be7f1-2e37-401f-af2f-902656c8da71" />
