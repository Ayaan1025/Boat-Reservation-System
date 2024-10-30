// Add a boat to DB
exports.add = function(db, obj, callback) {
    const sql = "INSERT INTO Boats (B_name, B_type) VALUES (?, ?)";
    const values = [obj.B_name, obj.B_type];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Display boats
exports.display = function(db, callback) {
    const sql = "SELECT * FROM Boats";
    db.query(sql, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Update a boat
exports.update = function(db, obj, callback) {
    const sql = "UPDATE Boats SET B_type = ? WHERE B_name = ?";
    const values = [obj.B_type, obj.B_name];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Delete a boat
exports.delete = function(db, obj, callback) {
    const sql = "DELETE FROM Boats WHERE B_name = ?";
    const values = [obj.B_name];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        console.log('Deleted Row(s):', results.affectedRows);
        callback(results);
    });
};