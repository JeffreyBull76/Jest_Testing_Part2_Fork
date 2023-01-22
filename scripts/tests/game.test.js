/**
 * @jest-environment jsdom
 */

// const { expect } = require("@jest/globals");
// const { describe } = require("yargs");

const { game, newGame, showScore, addTurn } = require("../game");


beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct IDs", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 43;
        currentGame = [1];
        playerMoves = [12];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("reset score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("should be one element in computers array", () => {
        expect(game.currentGame.length).toBe(1);
    });
    test("reset playerMoves", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("Should display 0 for element of ID score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});

describe("Gameplay works corretly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
});