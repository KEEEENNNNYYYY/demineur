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
import { LinearGradient } from "expo-linear-gradient";
import { HomeBackground } from "@/components/HomeBackground";

const levels: Level[] = [
    { name: "Facile", bombs: 20, cellWidth: 10 },
    { name: "Medium", bombs: 40, cellWidth: 20 },
    { name: "Difficile", bombs: 60, cellWidth: 30 },
];

const closestDiv10 = (n: number) => Math.round(n / 10) * 10;
const { width } = Dimensions.get("screen");
const getVolume = (v: number) => (v > 100 ? 100 : v < 0 ? 0 : v);

const Options = () => {
    const { level, vibrateOnLose, setState, volume } = useOptionsStore();
    const savedLevelIndex = levels.findIndex((l) => l.name === level.name);

    const [vibrateOnLoseState, setVibrateOnLoseState] = useState(vibrateOnLose);
    const [levelState, setLevelState] = useState(savedLevelIndex);
    const [volumeState, setVolumeState] = useState(volume);

    const router = useRouter();

    useEffect(() => setLevelState(savedLevelIndex), [savedLevelIndex]);
    useEffect(() => setVolumeState(volume), [volume]);

    const handleSave = () => {
        setState(volumeState, levels[levelState], vibrateOnLoseState);
        router.back();
    };

    return (
        <HomeBackground>
            <ScrollView
                contentContainerClassName="px-4 py-6"
                showsVerticalScrollIndicator={false}
            >
                <View className="gap-6">
                    {/* 🎵 VOLUME */}
                    <View className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 p-4 shadow-lg">
                        <Text className="font-bold text-purple-700 mb-3">
                            🎵 Musique — {volumeState}%
                        </Text>

                        <View className="flex-row items-center justify-between">
                            <Pressable onPress={() => setVolumeState(getVolume(volumeState - 10))}>
                                <AntDesign name="minus" size={22} color="#7c3aed" />
                            </Pressable>

                            <Slider
                                style={{ width: width / 2 }}
                                minimumValue={0}
                                maximumValue={100}
                                value={volumeState}
                                onValueChange={(v) => setVolumeState(closestDiv10(v))}
                                minimumTrackTintColor="#c084fc"
                                maximumTrackTintColor="#e9d5ff"
                                thumbTintColor="#f472b6"
                            />

                            <Pressable onPress={() => setVolumeState(getVolume(volumeState + 10))}>
                                <AntDesign name="plus" size={22} color="#7c3aed" />
                            </Pressable>

                            <Pressable onPress={() => setVolumeState(0)}>
                                <AntDesign name="sound" size={22} color="#ec4899" />
                            </Pressable>
                        </View>
                    </View>

                    {/* 📳 VIBRATION */}
                    <View className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 p-4 shadow-lg">
                        <Text className="font-bold text-purple-700 mb-3">
                            📳 Vibrations
                        </Text>

                        <View className="flex-row justify-between items-center">
                            <Text className="text-slate-700">
                                {vibrateOnLoseState ? "Activé" : "Désactivé"}
                            </Text>
                            <Switch
                                value={vibrateOnLoseState}
                                onValueChange={setVibrateOnLoseState}
                                trackColor={{ true: "#f9a8d4", false: "#e5e7eb" }}
                                thumbColor={vibrateOnLoseState ? "#c084fc" : "#fff"}
                            />
                        </View>
                    </View>

                    {/* 🎮 NIVEAU */}
                    <View className="rounded-3xl bg-white/50 backdrop-blur-xl border border-white/60 p-4 shadow-lg">
                        <Text className="font-bold text-purple-700 mb-3">
                            🎮 Niveau de jeu
                        </Text>

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
                            onValueChange={(v: any) => setLevelState(v)}
                            primaryColor="#c084fc"
                            dropdownContainerStyle={{
                                borderRadius: 16,
                                borderWidth: 1,
                                borderColor: "rgba(255,255,255,0.7)",
                                backgroundColor: "rgba(255,255,255,0.6)",
                                paddingInline: 12,
                                height: 48,
                            }}
                        />
                    </View>

                    {/* 💾 SAVE BUTTON */}
                    <Pressable
                        onPress={handleSave}
                        className="rounded-full overflow-hidden mt-6 active:scale-95"
                    >
                        <LinearGradient
                            colors={["#c084fc", "#f472b6", "#fde047"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="py-4"
                        >
                            <Text className="text-white font-bold text-center text-base">
                                💾 Sauvegarder
                            </Text>
                        </LinearGradient>
                    </Pressable>
                </View>
            </ScrollView>
        </HomeBackground>
    );
};

export default Options;
