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
      volume: 0.6,
    });

    background.play();
  };

  private onBeaterBrickCollision = (event: BeaterBrickCollision) => {
    // Audio file names are BRICK_BEATER
    let fileName = `/audio/${event.brickName}_${event.beaterName}.wav`;
    console.log("sfx to play: ", fileName);

    if (!window.location.href.includes("localhost")) {
      fileName = "/brick-beat" + fileName;
    }

    const sfxUrl = new URL(fileName, import.meta.url).href;
    const sfx = new Howl({
      src: sfxUrl,
    });

    sfx.play();
  };

  private onBeaterBeaterCollision = (event: BeaterBeaterCollision) => {
    // Play SFX
  };
}
