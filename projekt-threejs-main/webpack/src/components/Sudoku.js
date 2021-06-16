import Config from './Config'

export default class {
    constructor() {
        this.sudoku = []
        this.emptiedsudoku = []
        this.row = []
        this.rows = []
        this.generateSudoku()
        this.free = true
    }

    generateSudoku() {
        let rows = []
        let row = []
        let r = 0
        let rand = true;
        this.sudoku = []

        console.log(this.sudoku)
        row = []
        for (let i = 1; i < 10; i++) {
            do {
                rand = false
                r = Math.floor(Math.random() * 9)

                if (row[r] == null)
                    rand = true
            } while (!rand)
            row[r] = i
        }
        console.log(row)

        //console.log(this.sudoku)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        let row1 = [...row]
        let row1t = [...row1]
        this.sudoku[0] = row1;
        console.log(this.sudoku)

        let row2 = [...row1]
        row2.push(row2.shift())
        row2.push(row2.shift())
        row2.push(row2.shift())
        let row2t = [...row2]
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        console.log(row2)
        this.sudoku[1] = row2;
        console.log(this.sudoku)
        let row3 = [...row2]
        row3.push(row3.shift())
        row3.push(row3.shift())
        row3.push(row3.shift())
        let row3t = [...row3]
        console.log(row3)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        console.log(row3)
        this.sudoku[2] = row3;
        console.log(this.sudoku)
        let row4 = [...row3]
        row4.push(row4.shift())
        let row4t = [...row4]
        console.log(row)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        console.log(row4)
        this.sudoku[3] = row4;
        console.log(this.sudoku)
        let row5 = [...row4]
        row5.push(row5.shift())
        row5.push(row5.shift())
        row5.push(row5.shift())
        let row5t = [...row5]
        console.log(row)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        console.log(row5)
        this.sudoku[4] = row5;
        console.log(this.sudoku)
        let row6 = [...row5]
        row6.push(row6.shift())
        row6.push(row6.shift())
        row6.push(row6.shift())
        let row6t = [...row6]
        console.log(row)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        console.log(row6)
        this.sudoku[5] = row6;
        console.log(this.sudoku)
        let row7 = [...row6]
        row7.push(row7.shift())
        let row7t = [...row7]
        console.log(row7)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        console.log(row7)
        this.sudoku[6] = row7;
        console.log(this.sudoku)
        let row8 = [...row7]
        row8.push(row8.shift())
        row8.push(row8.shift())
        row8.push(row8.shift())
        let row8t = [...row8]
        console.log(row8)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        this.sudoku[7] = row8;
        let row9 = [...row8]
        row9.push(row9.shift())
        row9.push(row9.shift())
        row9.push(row9.shift())
        let row9t = [...row9]
        console.log(row9)
        /*do {
            rand = false
            r = Math.floor(Math.random() * 9)
 
            if (this.sudoku[r] == null)
                rand = true
        } while (!rand)*/
        this.sudoku[8] = row9;
        console.log(this.sudoku[0])
        console.log(this.sudoku[1])
        console.log(this.sudoku[2])
        console.log(this.sudoku[3])
        console.log(this.sudoku[4])
        console.log(this.sudoku[5])
        console.log(this.sudoku[6])
        console.log(this.sudoku[7])
        console.log(this.sudoku[8])
        console.log(this.sudoku)
        this.emptiedsudoku[0] = row1t
        this.emptiedsudoku[1] = row2t
        this.emptiedsudoku[2] = row3t
        this.emptiedsudoku[3] = row4t
        this.emptiedsudoku[4] = row5t
        this.emptiedsudoku[5] = row6t
        this.emptiedsudoku[6] = row7t
        this.emptiedsudoku[7] = row8t
        this.emptiedsudoku[8] = row9t
        Config.WhiteLeft = Config.Level * Config.Difficulty;
        for (var i = 0; i < Config.Level * Config.Difficulty; i++) {
            var x = Math.floor(Math.random() * 9)
            var y = Math.floor(Math.random() * 9)
            this.emptiedsudoku[x][y] = 0
            this.sudoku[x][y] = 0
        }
        Config.currentSudoku = this.emptiedsudoku
        Config.BaseSudoku = this.sudoku
        /*for (let i = 0; i < 20; i++) {
            this.sudoku[0].push(this.sudoku[0].shift())
        }
        console.log(this.sudoku[0])
        for (let i = 0; i < 10; i++) {
            this.sudoku[1].push(this.sudoku[1].shift())
        }
        console.log(this.sudoku[1])
        for (let i = 0; i < 7; i++) {
            this.sudoku[2].push(this.sudoku[2].shift())
        }
        console.log(this.sudoku[2])
        for (let i = 0; i < 3; i++) {
            this.sudoku[3].push(this.sudoku[3].shift())
        }
        console.log(this.sudoku[3])
        for (let i = 0; i < 6; i++) {
            this.sudoku[4].push(this.sudoku[4].shift())
        }
        console.log(this.sudoku[4])
        for (let i = 0; i < 17; i++) {
            this.sudoku[5].push(this.sudoku[5].shift())
        }
        console.log(this.sudoku[5])
        for (let i = 0; i < 14; i++) {
            this.sudoku[7].push(this.sudoku[7].shift())
        }
        console.log(this.sudoku[7])
        for (let i = 0; i < 13; i++) {
            this.sudoku[8].push(this.sudoku[8].shift())
        }
        console.log(this.sudoku[8])
        console.log(this.sudoku)
 
        console.log(this.sudoku)*/
    }

    /*checkiffree(array, positioni, positiono, desirednumber) {
        console.log("jestem");
        for (let i = 0; i < 9; i++) {
            console.log(array[i])
        }
        console.log(desirednumber);
        for (let i = 0; i < 9; i++) {
            if (array[i][positiono] == desirednumber)
                this.free = false
        }
        for (let i = 0; i < 9; i++) {
            if (array[positioni][i] == desirednumber)
                this.free = false
        }
    }*/
    fullcheck() {
        let repeated = false
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                for (var z = 0; z < 9; z++) {
                    if (y != z) {
                        if (Config.currentSudoku[x][y] == Config.currentSudoku[x][z]) {
                            repeated = true
                            console.log(x, y, z)
                        }
                    }
                }
            }
        }
        for (var y = 0; y < 9; y++) {
            for (var x = 0; x < 9; x++) {
                for (var z = 0; z < 9; z++) {
                    if (x != z) {
                        if (Config.currentSudoku[x][y] == Config.currentSudoku[z][y]) {
                            repeated = true
                            console.log(x, y, z)
                        }
                    }
                }
            }
        }
        if (repeated) {
            console.log("ŹLE!!!!!!!!");
            return false;
        } else {
            console.log("DOBRZE!!!!!!!!!!");
            return true;
        }
    }
}