import { useOptionsStore } from "@/store/options-store";
import { useAudioPlayer } from "expo-audio";
import { useEffect } from "react";

const audioSource = require("../assets/sounds/sound.mp3");

export const useMusic = () => {
  const player = useAudioPlayer(audioSource);
  const { volume } = useOptionsStore();

  useEffect(() => {
    if (volume === 0) {
      player.pause();
    } else {
      player.volume = volume / 100;
      player.play();
    }
  }, [volume]);
};
