function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}

//new object with destructured players objects
const players = {
    ...gameObject().home.players,
    ...gameObject().away.players
}

//unnestting object
const teamObject = gameObject();

function numPointsScored(playerName) {
    for (const name in players) {
        if (name === playerName) {
            return players[name].points
        }
    }
    return `${playerName} not found`

}

function shoeSize(playerName) {
    for (const name in players) {
        if (name === playerName) {
            return players[name].shoe
        }
    }
    return `${playerName} not found`
}

function teamColors(teamName) {

    for (const team in teamObject) {
        if (teamObject[team].teamName === teamName) {
            return teamObject[team].colors
        }
    }
    return `${teamName} not found`
}

function teamNames() {
    const playerArray = [];
    for (const team in teamObject) {
        playerArray.push(teamObject[team].teamName)
    }
    return playerArray
}

function playerNumbers(teamName) {
    for (const team in teamObject) {
        if (teamObject[team].teamName === teamName) {
            const allPlayers = Object.values(teamObject[team].players)
            const playerPoints = allPlayers.map(num => num.points)
            return playerPoints
        }
    }
}

function playerStats(playerName) {
    for (const name in players) {
        if (name === playerName) {
            return players[name]
        }
    }
    return `${playerName} not found`
}


console.log(playerStats('Jeff Adrien'))

// console.log(playerNumbers('Brooklyn Nets'))
// console.log(teamNames())
// console.log(teamColors("Brooklyn Nets"))
// console.log(numPointsScored('Jeff Adrien'))
// console.log(shoeSize('Jeff Adrien'))
