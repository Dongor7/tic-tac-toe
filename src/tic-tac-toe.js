class TicTacToe {
    constructor() {
        this.array = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.currentPlayer = 1;
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayer ? 'x': 'o';
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.array[rowIndex][columnIndex] === null){
            this.array[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            this.currentPlayer = this.currentPlayer ? 0 : 1;
        }
    }

    isFinished() {
        return (this.getWinner() === "x" || this.getWinner() === "o") || this.isDraw();
    }

    getWinner() {
        let count = 0;
        let countJ = 0;
        for (let i = 0; i < this.array.length; i++){
            for (let j = 0; j < this.array[i].length - 1; j++){
                if (this.array[i][j] === this.array[i][j + 1] && this.array[i][j] !== null){
                    count++;
                    if (count === 2)
                        return this.array[i][j];
                }
                if (this.array[j][i] === this.array[j + 1][i] && this.array[j][i] !== null){

                    countJ++;
                    if (countJ === 2)
                        return this.array[j][i];
                }
            }
            count = 0;
            countJ = 0;
        }

        for (let i = 0; i < this.array.length - 1; i++){
            if (this.array[i][i] === this.array[i + 1][i + 1] && this.array[i][i]){
                count++;
                if (count === 2)
                    return this.array[i][i];
            }
        }
        count = 0;
        for (let i = 0; i < this.array.length - 1; i++){
            if (this.array[i][this.array.length - 1 - i] === this.array[i + 1][this.array.length - 1 - i - 1]
                                                                && this.array[i][this.array.length - 1 - i]){
                count++;
                if (count === 2)
                    return this.array[i][this.array.length - 1 - i];
            }
        }
        return null;
    }

    noMoreTurns() {
        for(let elem of this.array){
            if(elem.includes(null))
                return false;
        }
        return true;
    }

    isDraw() {
            return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.array[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
