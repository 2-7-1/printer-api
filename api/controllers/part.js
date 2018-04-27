'use strict';

module.exports = {
    getParts,
    postPart,
    putPart,
    getPart,
    deletePart
};

var parts = []; // In-memory list of parts.  Ideally, this should be a database

// GET all parts
function getParts(req, res, next) {
    res.json(parts);
}

// POST part
function postPart(req, res, next) {
    parts.push({
        id: req.body.id,
        materialType: req.body.materialType,
        printerType: req.body.printerType,
        orientationAngle: req.body.orientationAngle,
        densityPercentage: req.body.densityPercentage
    });
    res.json({
        success: 1,
        message: "Part added to list"
    });
}

// GET /part/{id}
function getPart(req, res, next) {
    if (req.swagger.params.id.value) {
        var element = parts.find(element => {
            return element.id === req.swagger.params.id.value;
        });
        res.json(element);
    }
}

// PUT /part
function putPart(req, res, next) {
    var partIndex = parts.findIndex(element => {
        return element.id === req.body.id;
    });
    if (partIndex !== -1) {
        parts[partIndex].materialType = req.body.materialType;
        parts[partIndex].printerType = req.body.printerType;
        parts[partIndex].orientationAngle = req.body.orientationAngle;
        parts[partIndex].densityPercentage = req.body.densityPercentage;
        res.json({
            success: 1,
            message: "Part updated"
        });
    } else {
        res.json({
            success: 0,
            message: "Part not found"
        });
    }
}

// DELETE /part/{id}
function deletePart(req, res, next) {
    var found = false;
    var id = req.swagger.params.id.value;
    parts = parts.filter(element => {
        if (element.id === id) {
            found = true;
        } else {
            return element.id !== id;
        }
    });
    if (found) {
        res.json({
            success: 1,
            message: "Part Deleted"
        });
    } else {
        res.json({
            success: 0,
            message: "Part not found"
        });
    }
}