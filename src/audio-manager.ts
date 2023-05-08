import { Howl } from "howler";

import {
  BeaterBeaterCollision,
  BeaterBrickCollision,
} from "./events/event-map";
import { eventListener } from "./events/event-listener";

/**
 * All audio to be controlled by this class.
 * Appropriate audio lib needs installing first, then play in response to game events.
 */
export class AudioManager {
  constructor() {
    eventListener.on("game-start", this.onGameStart);
    eventListener.on("beater-brick-collision", this.onBeaterBrickCollision);
    eventListener.on("beater-beater-collision", this.onBeaterBeaterCollision);
  }

  private onGameStart = () => {
    const bgUrl = new URL("/audio/backgroundAudio.wav", import.meta.url).href;
    const background = new Howl({
      src: bgUrl,
      loop: true,
    });

    background.play();
  };

  private onBeaterBrickCollision = (event: BeaterBrickCollision) => {
    // Audio file names are BRICK_BEATER
    const fileName = `${event.brickName}_${event.beaterName}`;
    console.log("sfx to play: ", fileName);
  };

  private onBeaterBeaterCollision = (event: BeaterBeaterCollision) => {
    // Play SFX
  };
}
