import "@/global.css";
import { Level, useOptionsStore } from "@/store/options-store";
import AntDesign from "@expo/vector-icons/AntDesign";
import Slider from "@react-native-community/slider";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  Dimensions,
  Pressable,
  ScrollView,
  Switch,
  Text,
  View,
} from "react-native";
import Dropdown from "react-native-input-select";

const levels: Level[] = [
  { name: "Facile", bombs: 20, cellWidth: 10 },
  { name: "Medium", bombs: 40, cellWidth: 20 },
  { name: "Difficile", bombs: 60, cellWidth: 30 },
];

const closestDiv10 = (n: number) => Math.round(n / 10) * 10;

const { width } = Dimensions.get("screen");

const getVolume = (value: number) =>
  value > 100 ? 100 : value < 0 ? 0 : value;

const Options = () => {
  const { level, vibrateOnLose, setState, volume } = useOptionsStore();

  const savedLevelIndex = levels.findIndex((l) => l.name === level.name);

  const [vibrateOnLoseState, setVibrateOnLoseState] = useState(vibrateOnLose);
  const [levelState, setLevelState] = useState<number>(savedLevelIndex);
  const [volumeState, setVolumeState] = useState(volume);
  const router = useRouter();

  useEffect(() => {
    setLevelState(savedLevelIndex);
  }, [savedLevelIndex]);

  useEffect(() => {
    setVolumeState(volumeState);
  }, [volume]);

  const handlePressSaveButton = () => {
    setState(volumeState, levels[levelState], vibrateOnLoseState);
    router.back();
  };

  const handleChangeVolumeState = (increase: boolean) => () => {
    setVolumeState(getVolume(increase ? volumeState + 10 : volumeState - 10));
  };

  return (
    <ScrollView className="p-10">
      <View>
        <View>
          <Text className="font-bold">Musique {volumeState}%</Text>
        </View>
        <View className="flex flex-row justify-around items-center my-5">
          <Pressable onPress={handleChangeVolumeState(false)}>
            <AntDesign name="plus" size={24} color="black" />
          </Pressable>
          <Slider
            style={{ width: width / 2, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            value={volumeState}
            onValueChange={(v) => setVolumeState(closestDiv10(v))}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#000000"
          />
          <Pressable onPress={handleChangeVolumeState(true)}>
            <AntDesign name="minus" size={24} color="black" />
          </Pressable>
          <Pressable onPress={() => setVolumeState(0)}>
            <AntDesign name="muted" size={24} color="black" />
          </Pressable>
        </View>
        <View>
          <Text className="font-bold">Vibrations</Text>
        </View>
        <View className="flex flex-row justify-between items-center my-5">
          <Text>{vibrateOnLoseState ? "Activé" : "Désactivé"}</Text>
          <Switch
            value={vibrateOnLoseState}
            onValueChange={(v) => setVibrateOnLoseState(v)}
          />
        </View>
        <View>
          <Text className="font-bold">Niveau de jeu</Text>
        </View>
        <View className="flex flex-row justify-center items-center my-5">
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
