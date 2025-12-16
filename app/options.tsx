import { useOptionsStore } from "@/store/options-store";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Switch, Text, View } from "react-native";

const Options = () => {
  const { vibrateOnLose, setState } = useOptionsStore();
  const [vibrateOnLoseState, setVibrateOnLoseState] = useState(vibrateOnLose);
  const router = useRouter();

  const handlePressSaveButton = () => {
    setState(
      50,
      { bombs: 20, cellWidth: 10, name: "Facile" },
      vibrateOnLoseState
    );
    router.back();
  };

  return (
    <View>
      <View>
        <Text>{vibrateOnLoseState ? "ON" : "OFF"}</Text>
        <Switch
          value={vibrateOnLoseState}
          onValueChange={(v) => setVibrateOnLoseState(v)}
        />
      </View>
      <Button title="Sauvegarder" onPress={handlePressSaveButton} />
    </View>
  );
};

export default Options;
