//console.log("webpack works!")
import './style.css';
/*import plik from './plik.png';
document.getElementById("img1").src = plik
import data1 from "./data1.js"
import data2 from "./data2.js"

import { aaa } from "./data1"
import { ccc } from "./data2"

const obj = {
    a: data1,
    b: data2
}
console.log(obj, aaa, ccc)*/
import Main from './components/Main';

function init() {
    //div
    const container = document.getElementById('root');
    //main class object
    new Main(container);
}

// app.get("/game", function (req, res) {
//     res.sendFile(path.join(__dirname + "../dist/src/index.html"));   // nie podajemy ścieżki tylko nazwę pliku
// })

// app.use(function (req, res, next) {

//     res.header('Access-Control-Allow-Origin', "*");
//     res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
//     res.header('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
//     res.header('Access-Control-Allow-Credentials', true);
//     next();


// },
//     express.static('webpack'))

init();