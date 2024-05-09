// Function to display player stats when clicked
function displayPlayerStats(partialName) {
    // Get the player stats table
    var playerStatsTable = document.getElementById('player-stats');

    // Loop through each row in the table
    for (var i = 1; i < playerStatsTable.rows.length; i++) {
        var row = playerStatsTable.rows[i];
        var playerName = row.cells[0].innerText.toLowerCase();
        
        // Check if the player name contains the partial name
        if (playerName.includes(partialName.toLowerCase())) {
            // Display the player stats row
            row.style.display = 'table-row';
        } else {
            // Hide other player stats rows
            row.style.display = 'none';
        }
    }
}

// Function to calculate and display team win percentage
function calculateWinPercentage(wins, losses) {
    var totalGames = wins + losses;
    var winPercentage = (wins / totalGames) * 100;

    // Display the win percentage on the page
    var winPercentageElement = document.getElementById('win-percentage');
    winPercentageElement.textContent = 'Win Percentage: ' + winPercentage.toFixed(2) + '%';
}

// Event listener to call displayPlayerStats function when a player is clicked
document.addEventListener('DOMContentLoaded', function() {
    // Get all player links
    var playerLinks = document.querySelectorAll('#player-list a');

    // Add click event listener to each player link
    playerLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            var playerName = link.textContent; // Get player name from link
            displayPlayerStats(playerName); // Call displayPlayerStats function with player name
        });
    });

    // Event listener for user input to call displayPlayerStats function
    var inputField = document.getElementById('player-name-input');
    var submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent form submission
        var partialName = inputField.value.trim(); // Get partial player name from input field
        if (partialName !== '') {
            displayPlayerStats(partialName); // Call displayPlayerStats function with partial player name
        }
    });
});

// Generate player roster
var players = ['Gabe I', 'Richard Cedeño', 'Jason Yang', 'Jeffrey Oparah', 'Fabrizio De', 'Sterling Pagan', 'Cameron Cutter', 'Myles Nicolas', 'Zaire Duncan', 'Markel Thompson', 'Samuel Ginzburg', 'Stephen Pierre-Paul'];

players.forEach(function(player) {
    var row = "<tr>";
    row += "<td>" + player + "</td>";
    row += "<td>0</td>"; // GP
    row += "<td>0</td>"; // MVP
    row += "<td>0</td>"; // PTS
    row += "<td>0</td>"; // REB
    row += "<td>0</td>"; // STL
    row += "<td>0</td>"; // BLK
    row += "<td>0</td>"; // TO
    row += "</tr>";
    document.querySelector("#player-stats tbody").innerHTML += row;
});
