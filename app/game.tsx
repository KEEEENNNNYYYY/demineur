import { Box } from "@/components/box";
import { useOptionsStore } from "@/store/options-store";
import { createMinesweeperBoard } from "@/utilities/create-board-values";
import { revealEmptyZone } from "@/utilities/reveal-empty-zone";
import { useState } from "react";
import { Pressable, ScrollView, Text, Vibration, View } from "react-native";
import { indexStyles } from "../styles/index-styles";

const Game = () => {
  const { level, vibrateOnLose } = useOptionsStore();
  const boardValue = createMinesweeperBoard(level.cellWidth, level.bombs);

  const [board, setBoard] = useState(boardValue);
  const [isGameOver, setIsGameOver] = useState(false);

  const handlePress = (index1: number, index2: number) => {
    const tempBoard = board.slice();
    const currentValue = tempBoard[index1][index2];

    if (currentValue.isBomb) {
      setIsGameOver(true);
      vibrateOnLose && Vibration.vibrate(200);
      return;
    }

    if (!currentValue.isOpen && currentValue.value === 0) {
      const newBoard = revealEmptyZone(tempBoard, index1, index2);
      setBoard(newBoard);
      return;
    }

    if (!currentValue.isOpen) {
      tempBoard[index1][index2] = { ...currentValue, isOpen: true };
      setBoard(tempBoard);
    }
  };

  const retry = () => {
    setBoard(createMinesweeperBoard(level.cellWidth, level.bombs));
    setIsGameOver(false);
  };

  return (
    <View>
      <ScrollView horizontal className="h-[70%]">
        <ScrollView className="mx-[20]">
          <View className="my-[20]">
            {board.map((tab, index1) => (
              <View
                key={`view-horizontal-${index1}`}
                style={indexStyles.horizontalView}
              >
                {tab.map((value, index2) => (
                  <Box
                    isGameOver={isGameOver}
                    index1={index1}
                    index2={index2}
                    onPress={handlePress}
                    value={value}
                    key={`box-${index2}`}
                  />
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      {isGameOver && (
        <View style={indexStyles.textContainer}>
          <Text>Boom!!! Vous avez perdu</Text>
        </View>
      )}
      {isGameOver && (
        <Pressable onPress={retry} style={indexStyles.bouton}>
          <Text style={indexStyles.boutonText}>Recommencer</Text>
        </Pressable>
      )}
    </View>
  );
};

export default Game;
