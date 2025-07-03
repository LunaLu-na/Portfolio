import Qualification from '../models/qualification.model.js'
import errorHandler from './error.controller.js'

const create = async (req, res) => {
    const qualification = new Qualification(req.body)
    try {
        await qualification.save()
        return res.status(200).json({
            message: "Qualification successfully created!"
        })
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const list = async (req, res) => {
    try {
        let qualifications = await Qualification.find()
        res.json(qualifications)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const qualificationByID = async (req, res, next, id) => {
    try {
        let qualification = await Qualification.findById(id)
        if (!qualification)
            return res.status(400).json({
                error: "Qualification not found"
            })
        req.qualification = qualification
        next()
    } catch (err) {
        return res.status(400).json({
            error: "Could not retrieve qualification"
        })
    }
}

const read = (req, res) => {
    return res.json(req.qualification)
}

const update = async (req, res) => {
    try {
        let qualification = req.qualification
        Object.assign(qualification, req.body)
        qualification.updated = Date.now()
        await qualification.save()
        res.json(qualification)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let qualification = req.qualification
        let deletedQualification = await qualification.deleteOne()
        res.json(deletedQualification)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeAll = async (req, res) => {
    try {
        await Qualification.deleteMany({})
        res.json({ message: "All qualifications deleted" })
    } catch (err) {
        res.status(400).json({ error: errorHandler.getErrorMessage(err) })
    }
}

export default { create, qualificationByID, read, list, update, remove, removeAll }