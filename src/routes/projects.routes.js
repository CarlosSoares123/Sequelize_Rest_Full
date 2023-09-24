import { Router } from 'express'
import { createProject, deleteProject, getProjects, getProject, updateProject, getProjectTask } from '../controllers/projects.controllers.js';
const router = Router()


router.get('/projects', getProjects);
router.post('/projects', createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)
router.get('/projects/:id', getProject)

router.get('/projects/:id/tasks', getProjectTask)


export default router