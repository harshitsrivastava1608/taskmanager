### Clone the repository to your system using the command:
  git clone https://github.com/harshitsrivastava1608/taskmanager

### Use the credentials as sent
  Create a file named .env at root of the folder and copy paste the credentials

### Run commands: 
npm install <br>
npm run start<br>
(Command to start the app is saved in scripts inside package.json)

### The Server with both databases is up and running.
Have used railway.com for deploying remote free tier databases and resend.com for free email service.

##### Assumptions
The tasks title and description is in text (string)<br>
The JWT linked to a particular user and using JWT token from login API would tell task APIs about the user which is owner of that task.<br>
Email Service is configured to be sent to my email address, can be easily configured to be sent to the user.

## API Documentation

POST API: /auth/register<br>
Sample Body=> 
{
    "userName":"harshit",
    "email":"harshit.srivastava1608@gmail.com",
    "password":"abcd@1234"
}<br>
This would register the user to app

POST: /auth/login<br>
Sample Body=> {
    "email":"harshit.srivastava1608@gmail.com",
    "password":"abcd@1234"
}<br>
The response contains a signed JWT token containg userId.

POST: /tasks<br>
Pass the above obtained JWT token to headers with key Authorization<br>
Sample Body=>{
    "title":"My First Task",
    "description":"description of my first task",
    "dueDate":"2025-12-04T14:30:00.000Z", "priority":"High", "status":"Pending"
}
This would save the task to database

GET: /tasks <br>
Query Params can be passed as : ?status=Pending<br>
status,priority, (Pagination) =>pageSize and pageNumber these can also be passed.<br>
We get the filtered tasks created by this specific user.

DELETE: /tasks/:taskId <br>
we can pass the taskId from above API of the task we want to delete

UPDATE: /tasks/:taskId <br>
Sample Body :{title,description,dueDate}<br>
These data can be updated for a particular task.


<img width="1714" height="705" alt="image" src="https://github.com/user-attachments/assets/8e7d5430-df78-4633-9b5f-d259d4a0ab11" />

<img width="1647" height="751" alt="image" src="https://github.com/user-attachments/assets/e34be7f1-2e37-401f-af2f-902656c8da71" />

<img width="1100" height="500" alt="image" src="https://github.com/user-attachments/assets/f995a274-3ba0-4d11-8da5-8c6d4360abba" />
