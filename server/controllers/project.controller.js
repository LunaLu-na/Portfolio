import Project from '../models/project.model.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const project = new Project(req.body)
    try {
        await project.save()
        return res.status(200).json({
            message: "Project successfully created!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let projects = await Project.find()
        res.json(projects)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const projectByID = async (req, res, next, id) => {
    try {
        let project = await Project.findById(id)
        if (!project)
            return res.status(400).json({
                error: "Project not found"
            })
        req.project = project
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve project"
        })
    }
}

const read = (req, res) => {
    return res.json(req.project)
}

const update = async (req, res) => {
    try {
        let project = req.project
        Object.assign(project, req.body)
        project.updated = Date.now()
        await project.save()
        res.json(project)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let project = req.project
        let deletedProject = await project.deleteOne()
        res.json(deletedProject)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeAll = async (req, res) => {
    try {
        await Project.deleteMany({})
        res.json({ message: "All projects deleted" })
    } catch (err) {
        res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

export default { create, projectByID, read, list, update, remove, removeAll }