import { MD2Loader } from './MD2Loader.js';
import { Mesh, TextureLoader, MeshPhongMaterial, MeshBasicMaterial, BoxGeometry, DoubleSide, RepeatWrapping, PlaneGeometry, PointLight } from "three"
<<<<<<< HEAD
=======
import marioTex from "./assets/homer.png"
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
import Config from './Config'
import walltexture from "./assets/wall.png"
import floortexture from "./assets/floor.png"
import tone from './assets/numtex/1t.png'
import tzero from './assets/numtex/0t.png'
import ttwo from './assets/numtex/2t.png'
import tthree from './assets/numtex/3t.png'
import tfour from './assets/numtex/4t.png'
import tfive from './assets/numtex/5t.png'
import tsix from './assets/numtex/6t.png'
import tseven from './assets/numtex/7t.png'
import teight from './assets/numtex/8t.png'
import tnine from './assets/numtex/9t.png'
import squaretexture from './assets/parchment.jpg'


export default class Model {
    constructor(scene, sudokuu) {
        this.scene = scene;
        this.mesh = null;
        //this.manager = manager;
        this.geometry = null
        this.material = null
        this.light = [];
        this.cube = [];
        this.floor = [];
        this.planes = [];
        this.sudokuu = sudokuu;
        this.counter2 = 0;
    }

    build() {

        // Manager is passed in to loader to determine when loading done in main
        // Load model with FBXLoader

        /*new MD2Loader(this.manager).load(
            path,
            geometry => {

                this.geometry = geometry;

                this.mesh = new Mesh(geometry, new MeshPhongMaterial({
                    map: new TextureLoader().load(marioTex), // dowolny plik png, jpg
                    morphTargets: true // animowanie materiału modelu
                }))

                this.scene.add(this.mesh);
                console.log(this.geometry.animations) // tu powinny być widoczne animacje

            },

        );*/
        const texturee = new TextureLoader().load(walltexture);
        const texturee2 = new TextureLoader().load(floortexture);
        const texturee3 = new TextureLoader().load(squaretexture);
        texturee.wrapS = RepeatWrapping;
        texturee.wrapT = RepeatWrapping;
        texturee.repeat.set(4, 4);
        const geometryp = new PlaneGeometry(100, 100, 32);
        const geometryf = new BoxGeometry(100, 100, 100);
        const materialp = new MeshBasicMaterial({
            specular: 0xffffff,
            shininess: 50,
            side: DoubleSide,
            map: texturee2,
        });
        const material2p = new MeshBasicMaterial({
            specular: 0xffffff,
            shininess: 50,
            side: DoubleSide,
            map: texturee3,
        });
        var counter = 0;
        for (var y = 0; y < 11; y++) {
            for (var x = 0; x < 11; x++) {

                if (0 < x && 0 < y && x < 10 && y < 10) {
                    this.floor[counter] = new Mesh(geometryf, material2p);

                } else {
                    this.floor[counter] = new Mesh(geometryf, materialp);
                }

                this.floor[counter].position.x = 500 - (100 * y)
                this.floor[counter].position.y = -50
                this.floor[counter].position.z = 500 - (100 * x)
                this.floor[counter].name = y + "_" + x;
                this.scene.add(this.floor[counter]);
                counter++;




            }
        }
        this.counter2 = 0;
        for (var y = 0; y < 13; y++) {
            for (var x = 0; x < 13; x++) {

                if ((y == 0 || y == 12) || (x == 0 || x == 12)) {

                    this.geometry = new BoxGeometry(100, 100, 100);
                    this.material = new MeshBasicMaterial({
                        side: DoubleSide,
                        map: new TextureLoader().load(walltexture),
                        transparent: true,
                        opacity: 1,

                    })
                    this.cube[this.counter2] = new Mesh(this.geometry, this.material);

                    this.cube[this.counter2].position.x = 600 - (100 * y)
                    this.cube[this.counter2].position.y = 50
                    this.cube[this.counter2].position.z = 600 - (100 * x)
                    this.scene.add(this.cube[this.counter2]);
                    this.counter2++;
                }




            }
        }
        let textureepl = null;
        let ifzero = false;
        let counter3 = 0;
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                switch (Config.currentSudoku[y][x]) {
                    case 0:
                        //textureepl = new TextureLoader().load(tzero);
                        ifzero = true;
                        break;
                    case 1:
                        textureepl = new TextureLoader().load(tone);
                        ifzero = false;
                        break;

                    case 2:
                        textureepl = new TextureLoader().load(ttwo);
                        ifzero = false;
                        break;

                    case 3:
                        textureepl = new TextureLoader().load(tthree);
                        ifzero = false;
                        break;

                    case 4:
                        textureepl = new TextureLoader().load(tfour);
                        ifzero = false;
                        break;

                    case 5:
                        textureepl = new TextureLoader().load(tfive);
                        ifzero = false;
                        break;

                    case 6:
                        textureepl = new TextureLoader().load(tsix);
                        ifzero = false;
                        break;
                    case 7:
                        textureepl = new TextureLoader().load(tseven);
                        ifzero = false;
                        break;

                    case 8:
                        textureepl = new TextureLoader().load(teight);
                        ifzero = false;
                        break;

                    case 9:
                        textureepl = new TextureLoader().load(tnine);
                        ifzero = false;
                        break;

                    default:
                        break;
                }
                let materialpl = null
                if (!ifzero) {
                    materialpl = new MeshBasicMaterial({
                        alphaTest: 0.4,
                        side: DoubleSide,
                        map: textureepl,
                    });
                } else {
                    materialpl = new MeshBasicMaterial({
                        opacity: 0,
                        transparent: true

                    });
                }

                this.planes[counter3] = new Mesh(geometryp, materialpl);
                this.planes[counter3].position.x = 400 - (100 * x)
                this.planes[counter3].position.y = 1
                this.planes[counter3].position.z = 400 - (100 * y)
                this.planes[counter3].rotateX((Math.PI / 2))
                this.planes[counter3].rotateY((Math.PI))
                //this.planes[counter3].rotateZ((Math.PI / 2))
                this.planes[counter3].name = y + "_" + x;
                this.scene.add(this.planes[counter3]);
                counter3++;
            }
        }

        const plane = new Mesh(geometryp, materialp);
        plane.rotateX(1.57)
        const plane2 = new Mesh(geometryp, materialp);
        plane2.rotateX(1.57)
        plane2.position.y = 100
        //this.scene.add(plane);
        //this.scene.add(plane2);


        /*for (var y = 0; y < 10; y++) {
            for (var x = 0; x < 10; x++) {
                if (Config.mapconfig[y][x].type == "wall") {
                    this.geometry = new BoxGeometry(100, 100, 100);
                    this.material = new MeshBasicMaterial({
                        side: DoubleSide,
                        map: new TextureLoader().load(walltexture),
                        transparent: true,
                        opacity: 1,
 
                    })
                    this.cube[this.counter2] = new Mesh(this.geometry, this.material);
 
                    this.cube[this.counter2].position.x = 450 - (100 * y)
                    this.cube[this.counter2].position.y = 50
                    this.cube[this.counter2].position.z = 450 - (100 * x)
                    this.scene.add(this.cube[this.counter2]);
                    this.counter2++;
                } else if (Config.mapconfig[y][x].type == "light") {
 
                    this.light[counter] = new PointLight(0xffffff, 1, 200);
                    this.light[counter].position.x = 450 - (100 * y)
                    this.light[counter].position.y = 98
                    this.light[counter].position.z = 450 - (100 * x)
                    this.scene.add(this.light[counter]);
                    counter++;
 
                }
 
 
            }
        }
        for (var i = 0; i < this.light.length; i++) {
 
            this.light[i].intensity = 0.5;
        }*/


    }
    lightintensity(value) {
        for (var i = 0; i < this.light.length; i++) {

            this.light[i].intensity = value;
        }
    }

    unload() {
        this.scene.remove(this.mesh); // ew funkcja do usunięcia modelu ze sceny
    }
    updateplane(x, y) {
        let ifzero = false;
        var add = false;
        var take = false;
        var textureepl = null
        console.log("jestem!")
        var curry = ((y) * 9) + x
        console.log(this.planes[curry]);
        console.log(Config.CurNum);
        console.log(Config.BaseSudoku[x][y] == 0);
        console.log(Config.currentSudoku[x][y] == 0);
        if (Config.BaseSudoku[x][y] == 0) {
            console.log("halo")
            if (Config.currentSudoku[x][y] == 0) {
                add = true;
            }
            switch (Config.CurNum) {
                case 0:
                    textureepl = new TextureLoader().load(tzero);
                    ifzero = true;
                    if (add) {
                        add = false;
                    } else {
                        take = true;
                    }
                    break;
                case 1:
                    textureepl = new TextureLoader().load(tone);
                    ifzero = false;
                    break;

                case 2:
                    textureepl = new TextureLoader().load(ttwo);
                    ifzero = false;
                    break;

                case 3:
                    textureepl = new TextureLoader().load(tthree);
                    ifzero = false;
                    break;

                case 4:
                    textureepl = new TextureLoader().load(tfour);
                    ifzero = false;
                    break;

                case 5:
                    textureepl = new TextureLoader().load(tfive);
                    ifzero = false;
                    break;

                case 6:
                    textureepl = new TextureLoader().load(tsix);
                    ifzero = false;
                    break;
                case 7:
                    textureepl = new TextureLoader().load(tseven);
                    ifzero = false;
                    break;

                case 8:
                    textureepl = new TextureLoader().load(teight);
                    ifzero = false;
                    break;

                case 9:
                    textureepl = new TextureLoader().load(tnine);
                    ifzero = false;
                    break;

                default:
                    break;
            }
            console.log(textureepl);
            if (!ifzero) {
                this.planes[curry].material = new MeshBasicMaterial({
                    alphaTest: 0.4,
                    side: DoubleSide,
                    map: textureepl,
                });
            } else {
                this.planes[curry].material = new MeshBasicMaterial({
                    opacity: 0,
                    transparent: true

                });
            }

            Config.currentSudoku[x][y] = Config.CurNum;
            console.log(Config.currentSudoku)
            console.log(Config.BaseSudoku)
            if (add) {
                Config.WhiteLeft -= 1
            } else if (take) {
                Config.WhiteLeft += 1
            }
            console.log(Config.WhiteLeft)
            if (Config.WhiteLeft == 0) {
                if (this.sudokuu.fullcheck()) {
                    console.log("poszłoooo")
                    Config.Level += 1
                    this.nextlevel()
                }
            }
        }


    }
    nextlevel() {
        this.floor.forEach(element => {
            element.position.y -= 100

        });
        this.planes.forEach(element => {
            element.position.y -= 100

        });
        for (var y = 0; y < 13; y++) {
            for (var x = 0; x < 13; x++) {

                if ((y == 0 || y == 12) || (x == 0 || x == 12)) {

                    this.geometry = new BoxGeometry(100, 100, 100);
                    this.material = new MeshBasicMaterial({
                        side: DoubleSide,
                        map: new TextureLoader().load(walltexture),
                        transparent: true,
                        opacity: 1,

                    })
                    this.cube[this.counter2] = new Mesh(this.geometry, this.material);

                    this.cube[this.counter2].position.x = 600 - (100 * y)
                    this.cube[this.counter2].position.y = 50 - 100 * (Config.Level - 1)
                    this.cube[this.counter2].position.z = 600 - (100 * x)
                    this.scene.add(this.cube[this.counter2]);
                    this.counter2++;
                }




            }
        }
        this.sudokuu.generateSudoku();
        let counter3 = 0;
        let texturenew;
        for (var x = 0; x < 9; x++) {
            for (var y = 0; y < 9; y++) {
                switch (Config.currentSudoku[y][x]) {
                    case 0:
                        texturenew = new TextureLoader().load(tzero);
                        break;
                    case 1:
                        texturenew = new TextureLoader().load(tone);
                        break;

                    case 2:
                        texturenew = new TextureLoader().load(ttwo);
                        break;

                    case 3:
                        texturenew = new TextureLoader().load(tthree);
                        break;

                    case 4:
                        texturenew = new TextureLoader().load(tfour);
                        break;

                    case 5:
                        texturenew = new TextureLoader().load(tfive);
                        break;

                    case 6:
                        texturenew = new TextureLoader().load(tsix);
                        break;
                    case 7:
                        texturenew = new TextureLoader().load(tseven);
                        break;

                    case 8:
                        texturenew = new TextureLoader().load(teight);
                        break;

                    case 9:
                        texturenew = new TextureLoader().load(tnine);
                        break;

                    default:
                        break;
                }

                var zmianka = new MeshBasicMaterial({
                    alphaTest: 0.4,
                    side: DoubleSide,
                    map: texturenew,
                });
                this.planes[counter3].material = zmianka;

                counter3++;
            }
        }
        Config.Inair = true;
    }
<<<<<<< HEAD
    
=======
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
}