import { MD2Loader } from './MD2Loader.js';
import { Mesh, TextureLoader, MeshBasicMaterial } from "three"
import bepis from "./assets/pepsi2.jpg"

export default class Model {
    constructor(scene, manager) {
        this.scene = scene;
        this.mesh = null;
        this.manager = manager;
        this.geometry = null;
        this.meshBepis=null;
    }

    load(path) {

        // Manager is passed in to loader to determine when loading done in main
        // Load model with FBXLoader

        new MD2Loader(this.manager).load(
            path,
            geometry => {

                this.geometry = geometry;

                this.mesh = new Mesh(geometry, new MeshBasicMaterial({
                    map: new TextureLoader().load(bepis), // dowolny plik png, jpg
                    morphTargets: true // animowanie materiału modelu
                }))
                this.mesh.position.y = 25;
                this.mesh.rotateY(4.7)
                //this.mesh.rotateY(4.712)
                this.scene.add(this.mesh);
            },

        );

    }

    unload() {
        this.scene.remove(this.mesh); // ew funkcja do usunięcia modelu ze sceny
    }
}