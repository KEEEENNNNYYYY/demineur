import "@/global.css";
import { useOptionsStore } from "@/store/options-store";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Switch, Text, View } from "react-native";

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
    <ScrollView className="p-10">
      <View>
        <View>
          <Text className="font-bold">Vibrations</Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text>{vibrateOnLoseState ? "Activé" : "Désactivé"}</Text>
          <Switch
            value={vibrateOnLoseState}
            onValueChange={(v) => setVibrateOnLoseState(v)}
          />
        </View>
      </View>
      <View className="mt-20">
        <Pressable
          className="p-3 flex flex-row justify-center items-center rounded-lg bg-blue-400"
          onPress={handlePressSaveButton}
        >
          <Text className="text-white">Sauvegarder</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Options;
