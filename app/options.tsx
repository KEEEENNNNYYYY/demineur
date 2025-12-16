import "@/global.css";
import { Level, useOptionsStore } from "@/store/options-store";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Switch, Text, View } from "react-native";
import Dropdown from "react-native-input-select";

const levels: Level[] = [
  { name: "Facile", bombs: 20, cellWidth: 10 },
  { name: "Medium", bombs: 40, cellWidth: 20 },
  { name: "Difficile", bombs: 60, cellWidth: 30 },
];

const Options = () => {
  const { level, vibrateOnLose, setState } = useOptionsStore();
  console.log({ level });

  const savedLevelIndex = levels.findIndex((l) => l.name === level.name);

  const [vibrateOnLoseState, setVibrateOnLoseState] = useState(vibrateOnLose);
  const [levelState, setLevelState] = useState<number>(savedLevelIndex);
  const router = useRouter();

  useEffect(() => {
    setLevelState(savedLevelIndex);
  }, [savedLevelIndex]);

  const handlePressSaveButton = () => {
    console.log(levels[levelState]);

    setState(50, levels[levelState], vibrateOnLoseState);
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
        <View>
          <Text className="font-bold">Niveau de jeu</Text>
        </View>
        <View className="flex flex-row justify-center items-center">
          <Dropdown
            label=""
            placeholder="Sélectionnez un niveau"
            isMultiple={false}
            options={[
              { label: "Facile", value: 0 },
              { label: "Medium", value: 1 },
              { label: "Difficile", value: 2 },
            ]}
            selectedValue={levelState}
            onValueChange={(selected: any) => setLevelState(selected)}
            minSelectableItems={1}
            maxSelectableItems={1}
            primaryColor={"green"}
            dropdownContainerStyle={{
              borderColor: "blue",
              borderWidth: 2,
              borderRadius: 5,
              marginTop: 5,
              position: "relative",
              display: "flex",
              height: 50,
              alignItems: "flex-start",
              paddingInline: 10,
            }}
            dropdownIconStyle={{
              top: 22,
              right: 22,
            }}
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
