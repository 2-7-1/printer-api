'use strict';

// Queues
var printerQueue = [];
var completed = [];

// Simulate print job finishing every minute
setInterval(function () {
    if (printerQueue.length > 0) {
        var finishedJob = printerQueue[printerQueue.length - 1];
        finishedJob.status = 'complete';
        completed.push(finishedJob);
        printerQueue = printerQueue.pop();
        if (printerQueue.length > 0) {
            printerQueue[printerQueue.length - 1] = 'inProgress';
        }
    }
}, 10000);

module.exports = {
    getPrinterQueue,
    postPrinterQueue
};

// GET Print queue
function getPrinterQueue(req, res, next) {
    if (printerQueue.length > 0) {
        res.json(printerQueue.concat(completed));
    } else {
        res.json([]);
    }
    
}

// POST Print queue
function postPrinterQueue(req, res, next) {
    printerQueue.push({
        id: req.body.id,
        status: "ready"
    });
    res.json({
        "success": 1,
        "message": "Part sent to printer"
    })
}