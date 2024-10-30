// Add a reservation to DB
exports.add = function(db, obj, callback) {
    const sql = "INSERT INTO Reserves (S_Id, B_Id, Day) VALUES (?, ?, ?)";
    const values = [obj.S_Id, obj.B_Id, obj.Day];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Display reservations
exports.display = function(db, callback) {
    const sql = "SELECT * FROM Reserves";
    db.query(sql, (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

// Delete a reservation
exports.delete = function(db, obj, callback) {
    const sql = "DELETE FROM Reserves WHERE S_Id = ? AND B_Id = ? AND Day = ?";
    const values = [obj.S_Id, obj.B_Id, obj.Day];
    db.query(sql, values, (err, results) => {
        if (err) throw err;
        console.log('Deleted Row(s):', results.affectedRows);
        callback(results);
    });
};