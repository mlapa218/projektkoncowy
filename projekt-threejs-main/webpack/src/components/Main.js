import { Object3D, Scene } from 'three';
import Renderer from './Renderer';
import Camera from './Camera';
import alienmd2 from './assets/tris.md2';
import Collider from './Collider';
<<<<<<< HEAD
import bepisModel from './assets/bepis.md2';
import ModelBepis from './ModelBepis';
=======
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e

import {

    LoadingManager,
    Clock,
    Vector3,
    Vector2,
    GridHelper
} from 'three';


import Model from "./Model";
import Keyboard from "./Keyboard";
import Animation from "./Animation";
import Config from './Config';
import Click from './Click';
import Map from './Map';
import Stats from 'three/examples/jsm/libs/stats.module.js';
import Sudoku from './Sudoku'

export default class Main {
    constructor(container) {

        // właściwości klasy
        this.fallcount = -1;
        this.container = container;
        this.scene = new Scene();
        this.renderer = new Renderer(this.scene, container);
        this.camera = new Camera(this.renderer.threeRenderer);
        this.Sudoku = new Sudoku();

        console.log(Config.currentSudoku);

        this.isLoaded = null
        this.animation = null

        // grid - testowa siatka na podłoże modelu

        //const gridHelper = new GridHelper(1000, 10);
        //this.scene.add(gridHelper);

        //stats - statystyki wydajności

        this.stats = new Stats();
        this.stats.showPanel(0); // 0: fps, 1: ms, 2: mb

        document.body.appendChild(this.stats.dom);

        // zegar - vide lekcja 4

        this.clock = new Clock()

        // manager loadingu, pozwala monitorować progress oraz fakt zakończenia ładowania

        this.manager = new LoadingManager();

        // model

        this.player = new Object3D();
        this.model = new Model(this.player, this.manager);
        this.model.load(alienmd2);
<<<<<<< HEAD
        this.scene.add(this.player);


        this.cook = new Object3D();
        this.model2 = new ModelBepis(this.cook, this.manager);
        this.model2.load(bepisModel);
        this.scene.add(this.cook);
        this.cook.position.set(-500, 0, -500);
        this.cook.rotation.set(0, Math.PI / 3, 0)

        this.cook2 = new Object3D();
        this.model3 = new ModelBepis(this.cook2, this.manager);
        this.model3.load(bepisModel);
        this.scene.add(this.cook2);
        this.cook2.position.set(-500, 0, 500);
        this.cook2.rotation.set(0, Math.PI / 1.25, 0)

        this.cook3 = new Object3D();
        this.model4 = new ModelBepis(this.cook3, this.manager);
        this.model4.load(bepisModel);
        this.scene.add(this.cook3);
        this.cook3.position.set(500, 0, -500);
        this.cook3.rotation.set(0, Math.PI / -4, 0)

        this.cook4 = new Object3D();
        this.model5 = new ModelBepis(this.cook4, this.manager);
        this.model5.load(bepisModel);
        this.scene.add(this.cook4);
        this.cook4.position.set(500, 0, 500);
        this.cook4.rotation.set(0, Math.PI/-1.25, 0)
=======
        this.scene.add(this.player)

>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e

        // moniytor progressu ładowania

        this.manager.onProgress = (item, loaded, total) => {
            console.log(`progress ${item}: ${loaded} ${total}`);
        };

        //asd

        this.manager.onLoad = () => {

            this.isLoaded = true;
            //
            console.log("MODEL LOADED!!!")

            // model loaded - można sterować animacjami

            this.animation = new Animation(this.model.mesh)

            // przykładowa animacja z modelu Mario

            this.animation.playAnim("crstand")

<<<<<<< HEAD

=======
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
            //kawiatura

            this.keyboard = new Keyboard(window, this.animation, this.model.mesh);
        };
        this.map = new Map(this.scene, this.Sudoku);

<<<<<<< HEAD
            
        
=======
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
        this.Collider = new Collider(this.player, this.map.cube, this.scene)
        console.log(this.map.cube)
        this.map.build();
        console.log(this.camera.type)
        this.Click = new Click(this.map.planes, this.camera.threeCamera, window, this.map)
        /*$(document).mousedown(function (event) {
            
            this.Click.Detection(mouseVector);
        })*/

<<<<<<< HEAD
        //login

=======
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
        this.render();
    }


    render() {
<<<<<<< HEAD
        // console.log("pozycja playera");
        // console.log(this.player.position);
=======


>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
        this.camera.updatefov($("#range5").val())
        //this.map.lightintensity($("#range6").val())

        this.stats.begin()

        // delta do animacji
        var delta = this.clock.getDelta();
        this.Collider.Detect();

        // wykonanie funkcji update w module Animations - zobacz do pliku Animations
        if (this.animation) this.animation.update(delta)

        this.renderer.render(this.scene, this.camera.threeCamera);

        // obsługa ruch modelu dopiero kiedy jest załadowany, można tą część umieścić w module Keyboard
        // tworząc w nim np funkcję update() i wywoływać ją poniżej

        if (this.model.mesh) {
            //
            const camVect = new Vector3(0, 80, -100)
            const camPos = camVect.applyMatrix4(this.player.matrixWorld);
            this.camera.threeCamera.position.x = camPos.x
            this.camera.threeCamera.position.y = camPos.y
            this.camera.threeCamera.position.z = camPos.z
            this.camera.threeCamera.lookAt(this.player.position.x, this.player.position.y + 25, this.player.position.z)
            if (Config.rotateLeft && !Config.Inair) {
                this.player.rotation.y += 0.08
            }
            if (Config.rotateRight && !Config.Inair) {
                this.player.rotation.y -= 0.08
            }
            if (Config.moveForward && !Config.collision && !Config.Inair) {
                this.player.translateZ(4.5)
            }
            if (Config.moveBackwards && !Config.Inair) {
                this.player.translateZ(-6)
            }
        }
        if (Config.Inair) {
            if (this.fallcount > 0) {
                this.player.position.y -= 2;
                this.fallcount--;
            } else if (this.fallcount == 0) {
                Config.Inair = false;
                this.fallcount--;
            } else {
                this.fallcount = 50
            }
        }

        Config.CurNum = parseInt($("#numberselect").val())
        //console.log(typeof (Config.CurNum));
        // koniec statystyk
        this.stats.end()

<<<<<<< HEAD
=======



>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
        requestAnimationFrame(this.render.bind(this));
    }

}