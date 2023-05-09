import databaseConnection from "../database";

interface JoinGamePayload {
    code: number;
    name: string;
    callback: (payload: any) => void;
}

export default function (payload: JoinGamePayload) {
    console.log("JoinGame", payload)

    databaseConnection.query(`SELECT * FROM games WHERE code = ?`, [payload.code], (err, result) => {
        if (err) {
            console.error("Database", err)
            throw err
        };

        if (result.length > 0) {
            const token = makeToken();

            databaseConnection.query(`INSERT INTO players (name, game_id, token) VALUES (?, ?, ?)`, [payload.name, result[0].id, token], (err, result) => {
                if (err) {
                    console.error("Database", err)
                    throw err
                };
            });

            payload.callback({ 
                success: true, 
                message: "You have joined the game!",
                token: token,
                game: result[0]
            })
        } else {
            payload.callback({
                success: false,
                message: "This game does not exist!" 
            })
        }
    });
}

function makeToken() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 30) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}