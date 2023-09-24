import express from 'express'
import projectRouter from './routes/projects.routes.js'
import taskRouter from './routes/tasks.routes.js'

const app = express()

//middlewares
app.use(express.json())

app.use(projectRouter)
app.use(taskRouter)

export default app