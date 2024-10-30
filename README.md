The Boat Reservation System is an application designed to manage and streamline boat rentals. It features four key modules:

    Boats: Manages details about available boats, including names and types.
    Sailors: Handles sailor profiles and eligibility requirements.
    Reserves: Tracks reservations and maintains a history of boat assignments to sailors.
    Server: Processes client requests and coordinates actions across modules.

Together, these modules provide a scalable solution for efficient boat rental management.
Getting Started
Prerequisites

    Node.js and npm: Install from the Node.js website.
    MySQL: Install from the MySQL website.

Installation

    Clone the repository with git clone https://github.com/yourusername/boat-reservation-system.git and navigate to the project folder using cd boat-reservation-system.
    Install dependencies by running npm install.
    Set up your MySQL database:
        Create a database named sailing_adventure.
        Update the MySQL credentials in server.js to match your setup.
    Start the server with node server.js. The server will run on http://localhost:3000.

Usage

Use endpoints like /add_sailor, /add_boat, and /add_reserve to create entries, and /display_sailors, /display_boats, and /display_reserves to retrieve data. Each module also supports update and delete operations through endpoints like /update_boat or /delete_sailor.
Contributing

If you have suggestions for improvements, feel free to fork the repository, create an issue, or submit a pull request.
License

This project is licensed under the MIT License. See the LICENSE file for details.
