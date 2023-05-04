import { Howl } from 'howler';
import { eventListener } from "./events/event-listener";
import { BeaterBeaterCollision, BeaterBrickCollision } from "./events/event-map";

/**
 * All audio to be controlled by this class.
 * Appropriate audio lib needs installing first, then play in response to game events.
 */
export class AudioManager {
  constructor() {
    eventListener.on('game-start', this.onGameStart);
    eventListener.on("beater-brick-collision", this.onBeaterBrickCollision);
    eventListener.on("beater-beater-collision", this.onBeaterBeaterCollision);
  }

  private onGameStart = () => {
    const bgUrl = new URL('/audio/backgroundAudio.wav', import.meta.url).href;
    const background = new Howl({
      src: bgUrl,
      loop: true
    });

    background.play();
  }

  private onBeaterBrickCollision = (event: BeaterBrickCollision) => {
    // Play SFX
  };

  private onBeaterBeaterCollision = (event: BeaterBeaterCollision) => {
    // Play SFX
  };
}
