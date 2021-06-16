import { MD2Loader } from './MD2Loader.js';
import { Mesh, TextureLoader, MeshBasicMaterial } from "three"
import marioTex from "./assets/homer.png"
<<<<<<< HEAD
=======

>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
export default class Model {
    constructor(scene, manager) {
        this.scene = scene;
        this.mesh = null;
        this.manager = manager;
<<<<<<< HEAD
        this.geometry = null;
        this.meshBepis=null;
=======
        this.geometry = null
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
    }

    load(path) {

        // Manager is passed in to loader to determine when loading done in main
        // Load model with FBXLoader

        new MD2Loader(this.manager).load(
            path,
            geometry => {

                this.geometry = geometry;

                this.mesh = new Mesh(geometry, new MeshBasicMaterial({
                    map: new TextureLoader().load(marioTex), // dowolny plik png, jpg
                    morphTargets: true // animowanie materiału modelu
                }))
                this.mesh.position.y = 25;
                this.mesh.rotateY(4.7)
                //this.mesh.rotateY(4.712)
                this.scene.add(this.mesh);
                console.log(this.geometry.animations) // tu powinny być widoczne animacje
<<<<<<< HEAD
=======

>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
            },

        );

    }

    unload() {
        this.scene.remove(this.mesh); // ew funkcja do usunięcia modelu ze sceny
    }
}