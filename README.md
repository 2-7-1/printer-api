# printer-api
An API demonstrating management of 3D printed parts and sending them to be printed.

# Usage
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

    -- Add part to printer queue

To see a formal specification/documentation of this API, open https://github.com/2-7-1/printer-api/blob/master/api/swagger/swagger.yaml in Swagger editor (https://editor.swagger.io).

# Supported User Stories
In Agile terms, this is a Minimum Viable Product (MVP) for an API that demonstrates managing a collection of
3D printed parts and print jobs that supports the following user stories:

--As a user, I want to manage (List/Add/Update/Delete) my parts with properties - Material Type, Printer Type, Orientation Angle, Density Percentage

--As a user, I want to send command to print my part by id or name

-- As a user, I want to view my printer job queue for parts with status (Ready, In-Progress, Complete)

The parts collection and printer queue are simulated in an in-memory array.

The printer has logic that de-queues a part from the end of its printer queue in a FIFO fashon every 30 seconds to simulate that the printer completes a print job every 30 seconds.  It also changes the statuses of the jobs in the print queue accordingly between "ready", "inProgress", and "Complete".

# Further Refactoring
After this MVP, improvements and refactorings in future sprints should include:

-- Replacing in-memory arrays with live databases (perhaps AWS RDS)

-- More unit tests and error handling to cover more failure modes

-- Security (Validation/Authentication)

-- Docker container deployment on AWS ECS