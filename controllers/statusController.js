const statusModel = require('../models/statusModel')



exports.newStatus = async (req, res) =>{
    try{
        const status = await statusModel.create(req.body)
        if(!status){
            return res.status(400).json({
                message: `Cannot create status`
            })
        }

        res.status(201).json({
            message: `Successfully created a status`,
            data: status
        })

    }catch(err){
        return res.status(500).json({
            message: err.message
        })
    }
}



exports.getStatus = async (req, res) =>{
    try{
        const id = req.params.id

        const status = await statusModel.findById(id).populate('task')

        if(!status){
            return res.status(404).json({
                message: `status has been deleted`
            })
        }
        res.status(200).json({
            message: `status fetched successfully`,
            data: status
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}


exports.getAllStatus = async (req, res) =>{
    try{
        const status = await statusModel.find()

        if(status.length === 0){
            return res.status(404).json({
                message: `There are no status present here`
            })
        }
        res.status(200).json({
            message: `status fetched successfully. There are ${status.length} status here`,
            data: status
        })

    }catch(err){
        res.status(500).json({
            message: err.message
        })
    }
}
