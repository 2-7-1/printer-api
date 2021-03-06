# printer-api
A REST API demonstrating management of a collection of 3D printed parts and queueing parts for printing.

# Usage
The available API endpoints are:

GET /part
    
    -- List all parts in collection

GET /part/{id}

    -- Get part by id

POST /part

    -- Add new part to collection

PUT /part

    -- Update part in collection

DELETE /part/{id}

    -- Delete part from collection by id

GET /printer

    -- List all part id's in printer's queue

POST /printer

    -- Add part id to printer queue

To see a formal specification/documentation of this API, open https://github.com/2-7-1/printer-api/blob/master/api/swagger/swagger.yaml in Swagger editor (https://editor.swagger.io).

Unit tests are runnable with mocha: https://github.com/2-7-1/printer-api/tree/master/test/api/controllers 

# Supported User Stories
This Minimum Viable Product (MVP) is a microservice REST API that demonstrates managing a collection of
3D printed parts and print jobs.  It supports the following user stories:

-- As a user, I want to manage (List/Add/Update/Delete) my parts with properties - Material Type, Printer Type, Orientation Angle, Density Percentage

-- As a user, I want to send command to print my part by id or name

-- As a user, I want to view my printer job queue for parts with status (Ready, In-Progress, Complete)

This API has been tested against a local Node developer environment running as a NodeJS microservice using Express with Swagger middleware.

The parts collection and printer queue are simulated in an in-memory array.

The printer has logic that de-queues a part from the end of its printer queue in a FIFO schedule every 30 seconds to simulate that the printer completes a print job every 30 seconds.  It also changes the statuses of the jobs in the print queue accordingly between "ready", "inProgress", and "Complete".  See https://github.com/2-7-1/printer-api/blob/master/api/controllers/printer.js 

# Further Refactoring
After this MVP, improvements and refactorings in future sprints should include:

-- Replacing in-memory arrays with live databases (perhaps AWS RDS)

-- More unit tests and error handling to cover more kinds of failures

-- Security (Validation/Authentication)

-- Logging

-- Deploying/Running in Docker container on AWS ECS