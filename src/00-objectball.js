function gameObject () {
    return {
    homeTeam: {
        teamName: {
            name: "Brooklyn Nets"
        },
        colors: ["black", "white"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slumDunks: 1,
            },
            "Reggie Evans": {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slumDunks: 7,
            },
            "Brook Lopez": {
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slumDunks: 15,
            },
            "Mason Plumlee": {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slumDunks: 5,
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slumDunks: 1,
            }
        },
    },

    AwayTeam: {
        teamName: {
            name: "Charlotte Hornets"
        },
        colors: ["Turquoise", "purple"],
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slumDunks: 2,
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slumDunks: 10,
            },
            "Desagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slumDunks: 5,
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 3,
                steals: 1,
                blocks: 1,
                slumDunks: 0,
            },
            "Brendan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals:22,
                blocks: 5,
                slumDunks: 12,
            }
        },
    }
}
}

console.log(gameObject());

function teamPlayers () {
    // return {...gameObject().homeTeam.players}
    return gameObject()["homeTeam"]["players"]
}

function numPointsScored (playerName, stats) {
    // return teamPlayers().find(player["playerName"] === playerName)["points"]
}

console.log(numPointsScored("Ben Gordon", "blocks"));

function shoeSize (player, shoeSize) {

}

function teamColors (teamName) {

}

function playerNumbers (teamName, jerseyNumber) {

}

function playerStats (playerName) {

}

function bigShoeRebounds () {

}

function mostPointScored () {

}

function winningTeam () {

}

function playerWithLongestName () {

}

function doesLongNameStealATon () {

}

// console.log(pointsScored())
console.log(teamPlayers())