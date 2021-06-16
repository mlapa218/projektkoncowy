import {
    Vector3,
    Ray,
    Raycaster,
} from 'three';
import Config from "./Config";
export default class Renderer {
    constructor(player, container, scene) {
        this.scene = scene;
        this.player = player;
        this.container = container;
        this.raycaster = [];
        this.ray = [];
        this.raycaster[0] = new Raycaster()
        this.raycaster[1] = new Raycaster()
        this.raycaster[2] = new Raycaster()
        this.raycaster[3] = new Raycaster()
        this.raycaster[4] = new Raycaster()
        this.repeat = true;
        console.log(this.container)
    }

    Detect() {

        let target = new Vector3(0, 0, 0)
        let target2 = this.player.getWorldDirection(target);
        const axis = new Vector3(0, 1, 0) // oś Y  

        var rotatedV = target2.clone().applyAxisAngle(axis, 1.571)
        this.ray[0] = new Ray(this.player.position, rotatedV)
        var rotatedV = target2.clone().applyAxisAngle(axis, 0.785)
        this.ray[1] = new Ray(this.player.position, rotatedV)
        this.ray[2] = new Ray(this.player.position, target2)
        var rotatedV = target2.clone().applyAxisAngle(axis, -0.785)
        this.ray[3] = new Ray(this.player.position, rotatedV)
        var rotatedV = target2.clone().applyAxisAngle(axis, -1.571)
        this.ray[4] = new Ray(this.player.position, rotatedV)

        for (var i = 0; i < 5; i++) {
            this.raycaster[i].ray = this.ray[i]
            this.intersects = this.raycaster[i].intersectObjects(this.container);
            /*this.intersects.forEach(element => {

                element.object.material.color.setHex(0xff0000);


            });
            this.container.forEach(element => {
                this.same = true
                for (var i = 0; i < this.intersects.length; i++) {

                    if (element === this.intersects[i].object) {
                        this.same = false
                    }


                }
                if (this.same) {
                    element.material.color.setHex(0x8888ff);
                    this.same = false
                }
            });
            var innerhtml = "";
            this.intersects.forEach(element => {
                innerhtml += element.distance + "<br>"
                innerhtml += "x:" + element.point.x + "<br>"
                innerhtml += "y:" + element.point.y + "<br>"
                innerhtml += "z:" + element.point.z + "<br>"
            });
            $("#abc").html(

                innerhtml

            )*/
            if (this.intersects[0]) {
                if (this.intersects[0].distance <= 20 && this.repeat) {
                    console.log("krok 1")
                    //if(i < 3 && this.intersects[0].object.getWorldDirection(target).x)
                    var xd = Math.abs(Math.abs(this.intersects[0].object.position.x) - Math.abs(this.player.position.x))
                    var zd = Math.abs(Math.abs(this.intersects[0].object.position.z) - Math.abs(this.player.position.z))
                    if (zd > xd) {
                        console.log("krok 2")
                        if (this.intersects[0].object.position.z > this.player.position.z) {
                            console.log("krok 3")
                            if (this.player.getWorldDirection(target).z > 0) {
                                Config.collision = true
                                this.repeat = false
                            }
                        } else {
                            console.log("krok 3")
                            if (this.player.getWorldDirection(target).z < 0) {
                                Config.collision = true
                                this.repeat = false
                            }
                        }
                    } else {
                        console.log("krok 2")
                        if (this.intersects[0].object.position.x > this.player.position.x) {
                            console.log("krok 3")
                            if (this.player.getWorldDirection(target).x > 0) {
                                Config.collision = true
                                this.repeat = false
                            }
                        } else {
                            console.log("krok 3")
                            if (this.player.getWorldDirection(target).x < 0) {

                                Config.collision = true
                                this.repeat = false
                            }
                        }
                    }
                } else {

                }
            }
        }
        if (this.repeat) {
            Config.collision = false
        } else {
            this.repeat = true
        }


    }
}