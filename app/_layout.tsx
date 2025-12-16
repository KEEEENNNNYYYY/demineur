import { useMusic } from "@/hooks/use-music";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  useMusic();

  return <Stack />;
}
