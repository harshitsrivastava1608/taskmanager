const app=require('./app')
const PORT=process.env.PORT || 3000

async function startServer(){
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`)
    })
}

startServer().catch((err)=>{
    console.error('Failed to start server:', err)
    process.exit(1)
})