import Face from "./schema.js";
import Distance from "../utils/fn.js";

export const checkMatch = async(req, res) => {
    try {
        const {embedding} = req.body;
        if(!embedding || !Array.isArray(embedding)){
            return res.status(400).json({success: false, Message: 'Send The Right embedding'})
        };
        let match = null;
        let min_distance = 1.0
        const threshold = 0.6

        const allFaces = await Face.findAll();

        for (const face in allFaces){
            const distance = Distance(embedding, face.embedding);
            if(distance < minDistance && distance <= THRESHOLD){
                min_distance = distance,
                match = face
            };
        };
        if(!match){
            return res.status(404).json({success: false, message: 'failed to find a match. Unrecognized'})
        };
        return res.status(200).json({success: true, message: 'found a Match', data: match});
    } catch (error) {
        console.error(`Errro with adding new Face record ${error}`);
        return res.status(500).json({success: false, message: 'Internal Server Error'});
    }
};

export const newRecord = async(req, res) => {
    try {
        const {embedding} = req.body;
        if(!embedding || !Array.isArray(embedding)){
            return res.status(400).json({success: false, Message: 'Send The Right embedding'})
        };
        const new_face = await Face.create({embedding});
        if(!new_face){
            return res.status(404).json({success: false, message: 'Failed to create a new record'});
        };
        return res.status(201).json({success: true, message: 'face recorded'})
    } catch (error) {
        console.error(`Error with uploading a new face record ${error}`);
        return res.status(500).json({success: false, message: 'Internal Server Error'})
    }
};