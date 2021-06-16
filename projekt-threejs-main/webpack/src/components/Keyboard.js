import Animation from "./Animation"
import Config from "./Config";

const KEYS = {
    "left": 37,
    "up": 38,
    "right": 39,
    "down": 40,
};

export default class Keyboard {
    constructor(domElement, animation, modelMesh) {

        this.domElement = domElement;
        this.animation = animation
        this.modelMesh = modelMesh

        // events
        this.domElement.addEventListener('keydown', event => this.onKeyDown(event), false);
        this.domElement.addEventListener('keyup', event => this.onKeyUp(event), false);


    }

    onKeyUp(event) {
        switch (event.keyCode) {
            case KEYS.up:
                console.log('this.animation.playAnim("crstand")')
                Config.moveForward = false;
                this.switchanim("crstand");

                break;
            case KEYS.left:
                Config.rotateLeft = false;
                break;
            case KEYS.right:
                Config.rotateRight = false;
                break;
            case KEYS.down:
                Config.moveBackwards = false;
                break;


        }
        console.log('onKeyChange', event.keyCode)
    }

    onKeyDown(event) {
        switch (event.keyCode) {
            case KEYS.up:
                console.log('this.animation.playAnim("crstand")')
                Config.moveForward = true;
<<<<<<< HEAD
                this.switchanim("run");
                console.log('this.animation.playAnim("run")')
=======
                this.switchanim("crwalk");
                console.log('this.animation.playAnim("crwalk")')
>>>>>>> 4ba273c9c2899b33ecbc0b0303fba0d94573146e
                break;
            case KEYS.left:
                Config.rotateLeft = true;
                break;
            case KEYS.right:
                Config.rotateRight = true;
                break;
            case KEYS.down:
                Config.moveBackwards = true;
                break;
        }

    }
    switchanim(name) {
        console.log('wykonuję się')
        this.animation.playAnim(name)
    }


}