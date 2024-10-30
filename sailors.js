// Add a sailor to DB
exports.add = function(db, obj, callback) {
    const sql = "INSERT INTO Sailors (S_name, B_date, Rate) VALUES (?, ?, ?)";
    const values = [obj.S_name, obj.B_date, obj.Rate];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Display sailors
exports.display = function(db, callback) {
    const sql = "SELECT * FROM Sailors";
    db.query(sql, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Update a sailor
exports.update = function(db, obj, callback) {
    const sql = "UPDATE Sailors SET Rate = ? WHERE S_name = ? AND B_date = ?";
    const values = [obj.Rate, obj.S_name, obj.B_date];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Delete a sailor
exports.delete = function(db, obj, callback) {
    const sql = "DELETE FROM Sailors WHERE S_name = ?";
    const values = [obj.S_name];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        console.log('Deleted Row(s):', results.affectedRows);
        callback(results);
    });
};