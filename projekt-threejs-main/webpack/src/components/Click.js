import {
    Vector3,
    Ray,
    Raycaster,
    Vector2,
} from 'three';
import Config from "./Config";
export default class Renderer {
    constructor(container, camera, domElement, map) {
        this.camera = camera;
        this.container = container;
        this.ray = null;
        this.raycaster = new Raycaster()
        this.domElement = domElement;
        this.map = map;
        this.repeat = true;
        this.domElement.addEventListener('mousedown', event => this.Detection(event), false);
        console.log(this.camera.type)

    }

    Detection(event) {
        var mouseVector = new Vector2()
        mouseVector.x = (event.clientX / $(window).width()) * 2 - 1;
        mouseVector.y = -(event.clientY / $(window).height()) * 2 + 1;
        console.log(this.camera)

        this.raycaster.setFromCamera(mouseVector, this.camera);
        var intersects = this.raycaster.intersectObjects(this.container);
        console.log(intersects.length)
        if (intersects.length > 0) {

            // zerowy w tablicy czyli najbliższy kamery obiekt to ten, którego potrzebujemy:

            console.log(intersects[0].object.name);
            var arr = intersects[0].object.name.split("_")
            console.log(arr)
            var x = parseInt(arr[0])
            var y = parseInt(arr[1])
            console.log(x)
            console.log(y)
            this.map.updateplane(x, y)
        }

    }
}