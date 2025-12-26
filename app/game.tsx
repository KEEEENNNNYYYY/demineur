import { Box } from "@/components/box";
import { useOptionsStore } from "@/store/options-store";
import { createMinesweeperBoard } from "@/utilities/create-board-values";
import { revealEmptyZone } from "@/utilities/reveal-empty-zone";
import { useState } from "react";
import {
    Pressable,
    ScrollView,
    Text,
    Vibration,
    View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { HomeBackground } from "@/components/HomeBackground";

const Game = () => {
    const { level, vibrateOnLose } = useOptionsStore();
    const boardValue = createMinesweeperBoard(level.cellWidth, level.bombs);

    const [board, setBoard] = useState(boardValue);
    const [isGameOver, setIsGameOver] = useState(false);

    const handlePress = (i: number, j: number) => {
        const tempBoard = board.slice();
        const current = tempBoard[i][j];

        if (current.isBomb) {
            setIsGameOver(true);
            vibrateOnLose && Vibration.vibrate(200);
            return;
        }

        if (!current.isOpen && current.value === 0) {
            setBoard(revealEmptyZone(tempBoard, i, j));
            return;
        }

        if (!current.isOpen) {
            tempBoard[i][j] = { ...current, isOpen: true };
            setBoard(tempBoard);
        }
    };

    const retry = () => {
        setBoard(createMinesweeperBoard(level.cellWidth, level.bombs));
        setIsGameOver(false);
    };

    return (
        <HomeBackground>
            <View className="flex-1 items-center justify-center px-4">
                {/* BOARD */}
                <ScrollView horizontal className="max-h-[70%]">
                    <ScrollView>
                        <View className="p-4 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl">
                            {board.map((row, i) => (
                                <View key={i} className="flex-row">
                                    {row.map((value, j) => (
                                        <Box
                                            key={j}
                                            index1={i}
                                            index2={j}
                                            value={value}
                                            isGameOver={isGameOver}
                                            onPress={handlePress}
                                        />
                                    ))}
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </ScrollView>

                {/* GAME OVER */}
                {isGameOver && (
                    <View className="mt-6 px-6 py-3 rounded-2xl bg-pink-300/70 border border-white/60">
                        <Text className="text-pink-900 font-bold text-lg text-center">
                            💥 Boom ! Partie terminée
                        </Text>
                    </View>
                )}

                {isGameOver && (
                    <Pressable
                        onPress={retry}
                        className="mt-4 rounded-full overflow-hidden active:scale-95"
                    >
                        <LinearGradient
                            colors={["#c084fc", "#f472b6", "#fde047"]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            className="px-10 py-3"
                        >
                            <Text className="text-white font-bold text-base text-center">
                                🔄 Recommencer
                            </Text>
                        </LinearGradient>
                    </Pressable>
                )}
            </View>
        </HomeBackground>
    );
};

export default Game;
